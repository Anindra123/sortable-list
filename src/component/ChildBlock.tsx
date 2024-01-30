export default function ChildBlock({ title }: { title: string }) {
    return (
        <div className="childBlock-text-container">
            <p className="childBlock-text">{title}</p>
        </div>
    )
}