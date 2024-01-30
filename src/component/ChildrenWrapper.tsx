

interface ChildrenContainerProps {
    dragHandler: React.ReactNode,
    childBlock: React.ReactNode,
}

export default function ChildrenWrapper({ dragHandler, childBlock }: ChildrenContainerProps) {

    return (
        <>

            <div className="child-block-content-container">
                {dragHandler}
                {childBlock}
            </div>
        </>
    )
}