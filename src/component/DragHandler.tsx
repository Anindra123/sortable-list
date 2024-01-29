import GridSvg from "./svg/GridSvg"

interface DragHandlerProp {
    handleHandlerMouseDown: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
    handleHandlerMouseUp: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
}


export default function DragHandler({ handleHandlerMouseDown, handleHandlerMouseUp }: DragHandlerProp) {
    return (
        <div className="childBlock-indicator-container">
            <a className='drag-indicator'
                onMouseDown={handleHandlerMouseDown}
                onMouseUp={handleHandlerMouseUp}
            >
                <GridSvg fillColor='black' width={24} height={24} />
            </a>

        </div>
    )
}