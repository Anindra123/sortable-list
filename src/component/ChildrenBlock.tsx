import { useContext } from "react"
import { DragContext } from "../context/DragContext"

interface ChildrenBlockProps {
    title: string
    id: number,
    isDraggable: boolean,
    children: React.ReactNode,
}

export default function ChildrenBlock({ title
    , id, isDraggable, children }: ChildrenBlockProps) {

    const {
        isTop, isBottom, dragOverItemIndex, handleDragStart, handleDrop,
        handleDragEnter, handleDragEnd, handleDragOver, handleDragLeave } = useContext(DragContext);

    return (
        <>
            <div className={`top-bar ${dragOverItemIndex === id && isTop && "visible"}`}></div>
            <div draggable={isDraggable}
                onDragStart={(event) => handleDragStart(id, event)}
                onDrop={(event) => handleDrop(event)}
                onDragEnter={(event) => handleDragEnter(id, event)}
                onDragEnd={handleDragEnd}
                onDragOver={(event) => handleDragOver(event)}
                onDragLeave={(event) => handleDragLeave(event)}
                className={`childrenBlock`} id={id.toString()}>
                <div className="child-block-content-container">
                    {children}
                    <div className="childBlock-text-container">
                        <p className="childBlock-text">{title}</p>
                    </div>
                </div>
            </div>
            <div className={`bottom-bar ${dragOverItemIndex === id && isBottom && "visible"}`} ></div>
        </>
    )
}