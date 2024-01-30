import { useContext } from "react"
import GridSvg from "./svg/GridSvg"
import { DragHandlerContext } from "../context/DragHandlerContext"



export default function DragHandler() {
    const { handleHandlerMouseUp, handleHandlerMouseDown } = useContext(DragHandlerContext);
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