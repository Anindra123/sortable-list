
interface ChildrenBlockProps {
    title: string
    id: number,
    isDraggable: boolean,
    children: React.ReactNode,
    handleDragStart: (id: number) => void,
    handleDrop: (id: number) => void,
    handleDragEnter: (id: number) => void,
    handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void,
}

export default function ChildrenBlock({ title
    , id, isDraggable, children,
    handleDragStart,
    handleDrop,
    handleDragEnter,
    handleDragOver }: ChildrenBlockProps) {
    return (
        <div draggable={isDraggable}
            onDragStart={() => handleDragStart(id)}
            onDrop={() => handleDrop(id)}
            onDragEnter={() => handleDragEnter(id)}
            onDragOver={(event) => handleDragOver(event)}
            className="childrenBlock" >
            {children}
            <div className="childBlock-text-container">
                <p className="childBlock-text">{title}</p>
            </div>
        </div>
    )
}