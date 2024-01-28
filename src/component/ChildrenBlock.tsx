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

    const { dragItemIndex, dragOverItemIndex
        , handleDragStart, handleDrop,
        handleDragEnter, handleDragEnd, handleDragOver } = useContext(DragContext);

    const greater = dragItemIndex! > dragOverItemIndex! && dragOverItemIndex === id;
    const less = dragItemIndex! < dragOverItemIndex! && dragOverItemIndex === id;

    return (
        <div draggable={isDraggable}
            onDragStart={(e) => handleDragStart(id, e)}
            onDrop={() => handleDrop()}
            onDragEnter={() => handleDragEnter(id)}
            onDragEnd={handleDragEnd}
            onDragOver={(event) => handleDragOver(event)}
            className={`childrenBlock ${greater
                && "border-top"} ${less
                && "border-bottom"}`} id={id.toString()}>
            {children}
            <div className="childBlock-text-container">
                <p className="childBlock-text">{title}</p>
            </div>
        </div>
    )
}