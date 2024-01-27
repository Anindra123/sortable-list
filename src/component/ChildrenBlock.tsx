
interface ChildrenBlockProps {
    title: string
    id: number,
    isDraggable: boolean,
    children: React.ReactNode,
    handleDragStart: (id: number, event: React.DragEvent<HTMLDivElement>) => void,
    handleDrop: (id: number) => void,
    handleDragEnter: (id: number) => void,
    handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void,
    handleDragEnd: () => void,
    dragItemIndex: number | undefined,
    dragOverItemIndex: number | undefined,
}

export default function ChildrenBlock({ title
    , id, isDraggable, children,
    handleDragStart,
    handleDrop,
    handleDragEnter,
    handleDragOver,
    handleDragEnd,
    dragItemIndex,
    dragOverItemIndex }: ChildrenBlockProps) {
    return (
        <div draggable={isDraggable}
            onDragStart={(e) => handleDragStart(id, e)}
            onDrop={() => handleDrop(id)}
            onDragEnter={() => handleDragEnter(id)}
            onDragEnd={handleDragEnd}
            onDragOver={(event) => handleDragOver(event)}
            className={`childrenBlock ${dragItemIndex! > dragOverItemIndex! && dragOverItemIndex === id
                && "border-top"} ${dragItemIndex! < dragOverItemIndex! && dragOverItemIndex === id
                && "border-bottom"}`} id={id.toString()}>
            {children}
            <div className="childBlock-text-container">
                <p className="childBlock-text">{title}</p>
            </div>
        </div>
    )
}