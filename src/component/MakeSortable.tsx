import debounce from '../helper/Debounce'
import useDrag from '../hook/useDrag'

import DragHandler from '../component/DragHandler'

import ChildrenWrapper from './ChildrenWrapper'
import useDraggable from '../hook/useDraggable'
import useDragIndicator from '../hook/useDragIndicator'


interface MakeSortableProps {
    childElements: Array<React.JSX.Element>
}

export default function MakeSortable({ childElements }: MakeSortableProps) {

    const [children, dragOverItemIndex,
        handleDragStart, handleDrop, handleDragEnd,
        handleDragEnter] = useDrag({ elementArray: childElements })

    const [isDraggable, handleHandlerMouseDown, handleHandlerMouseUp] =
        useDraggable({ draggable: false });

    const [isTop, isBottom, handleDragOver] = useDragIndicator({ topValue: false, bottomValue: false })

    const debounce_call = debounce(handleHandlerMouseUp, 300)
    debounce_call();

    return (

        <div className="main-container">
            {children.map((ChildBlock, id) => (

                <div key={id}>

                    <div className={`top-bar ${dragOverItemIndex === id && isTop && "visible"}`}></div>
                    <div draggable={isDraggable}
                        onDragStart={(event) => handleDragStart(id, event)}
                        onDrop={(event) => handleDrop(event)}
                        onDragEnter={(event) => handleDragEnter(id, event)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(event) => handleDragOver(event)}
                        className={`childrenBlock`} id={id.toString()}>
                        <ChildrenWrapper

                            dragHandler={
                                <DragHandler
                                    handleHandlerMouseDown={handleHandlerMouseDown}
                                    handleHandlerMouseUp={handleHandlerMouseUp} />

                            } childBlock={ChildBlock}
                        />
                    </div>
                    <div className={`bottom-bar ${dragOverItemIndex === id && isBottom && "visible"}`} ></div>

                </div>
            ))}
        </div>

    )
}