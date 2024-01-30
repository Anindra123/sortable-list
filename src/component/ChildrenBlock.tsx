

interface ChildrenContainerProps {
    dragHandler: React.ReactNode,
    childContent: React.ReactNode,
}

export default function ChildrenBlock({ dragHandler, childContent }: ChildrenContainerProps) {

    return (
        <>

            <div className="child-block-content-container">
                {dragHandler}
                {childContent}
            </div>
        </>
    )
}