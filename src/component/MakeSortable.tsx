import { DragHandlerContext } from '../context/DragHandlerContext'
import debounce from '../helper/Debounce'
import useDrag from '../hook/useDrag'
import useDraggable from '../hook/useDraggable'
import useDragIndicator from '../hook/useDragIndicator'


interface MakeSortableProps<T> {
    childElements: Array<React.JSX.Element>,
    childrens: Array<T>,
    setChildren: React.Dispatch<React.SetStateAction<T[]>>,
}

export default function MakeSortable<T>({ childElements, childrens, setChildren }: MakeSortableProps<T>) {

    const [elements, dragOverItemIndex,
        handleDragStart, handleDrop, handleDragEnd,
        handleDragEnter] = useDrag({
            childrenArray: childrens
            , elementArray: childElements,
            setChildrenArray: setChildren
        })

    const [isDraggable, handleHandlerMouseDown, handleHandlerMouseUp] =
        useDraggable({ draggable: false });

    const [isTop, isBottom, handleDragOver] = useDragIndicator({ topValue: false, bottomValue: false })

    const debounce_call = debounce(handleHandlerMouseUp, 300)
    debounce_call();



    return (

        <div className="main-container">
            {elements.map((ChildBlock, id) => (

                <div key={id}>

                    <div className={`top-bar ${dragOverItemIndex === id && isTop && "visible"}`}></div>
                    <div draggable={isDraggable}
                        onDragStart={(event) => handleDragStart(id, event)}
                        onDrop={(event) => handleDrop(event)}
                        onDragEnter={(event) => handleDragEnter(id, event)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(event) => handleDragOver(event)}
                        className={`childrenBlock`} id={id.toString()}
                    >
                        <DragHandlerContext.Provider
                            value={{
                                handleHandlerMouseDown: handleHandlerMouseDown,
                                handleHandlerMouseUp: handleHandlerMouseUp
                            }}>

                            {ChildBlock}
                        </DragHandlerContext.Provider>
                    </div>
                    <div className={`bottom-bar ${dragOverItemIndex === id && isBottom && "visible"}`} ></div>

                </div>
            ))}
        </div>

    )
}