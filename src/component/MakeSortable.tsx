import { DragHandlerContext } from '../context/DragHandlerContext'
// import debounce from '../helper/Debounce'
import useDrag from '../hook/useDrag'
import useDraggable from '../hook/useDraggable'
import useDragIndicator from '../hook/useDragIndicator'


interface MakeSortableProps<T> {
    childElements: Array<React.JSX.Element>,
    childrens: Array<T>,
    setChildren: React.Dispatch<React.SetStateAction<T[]>>,
}

export default function MakeSortable<T>({ childElements, childrens, setChildren }: MakeSortableProps<T>) {

    const [elements, dragItemIndex, dragOverItemIndex,
        handleDragStart, handleDrop, handleDragEnd,
        handleDragEnter] = useDrag({
            childrenArray: childrens
            , elementArray: childElements
            , setChildrenArray: setChildren
        })

    const [isDraggable, handleHandlerMouseDown, handleHandlerMouseUp] =
        useDraggable({ draggable: false });

    const [isTop, isBottom, handleDragOver] = useDragIndicator({
        topValue: false
        , bottomValue: false
    })



    const hasTop = dragOverItemIndex! < dragItemIndex! &&
        Math.abs(dragOverItemIndex! - dragItemIndex!) === 1;

    const hasBottom = dragOverItemIndex! > dragItemIndex! &&
        Math.abs(dragOverItemIndex! - dragItemIndex!) === 1;


    return (

        <div className="main-container">
            {elements.map((ChildBlock, id) => (

                <div key={id}>

                    {
                        isTop && dragOverItemIndex === id && dragItemIndex !== id && !hasBottom
                        && (<div className={`top-bar visible`}
                            onDrop={() => handleDrop(isTop, isBottom)}
                            onDragOver={(event) => { event.preventDefault() }}
                            id={id.toString()} ></div>)
                    }
                    <div draggable={isDraggable}
                        onDragStart={() => handleDragStart(id)}
                        onDrop={() => handleDrop(isTop, isBottom)}
                        onDragEnter={() => handleDragEnter(id)}
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
                    {
                        isBottom && dragOverItemIndex === id && dragItemIndex !== id && !hasTop
                        &&
                        (<div className={`bottom-bar visible`}
                            onDrop={() => handleDrop(isTop, isBottom)}
                            onDragOver={(event) => { event.preventDefault() }}
                            id={id.toString()}
                        ></div>)
                    }

                </div>
            ))}
        </div>

    )
}