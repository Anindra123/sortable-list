export default function GridSvg({ fillColor, width, height }: {
    fillColor: string
    , width: number, height: number
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" style={{ fill: `${fillColor}` }}><path d="M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"></path></svg>

    )
}