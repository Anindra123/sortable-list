interface DragHandlerProp {
    children: React.ReactNode
}

export default function DragHandler({ children }: DragHandlerProp) {
    return (
        <div className="childBlock-indicator-container">
            {children}
        </div>
    )
}