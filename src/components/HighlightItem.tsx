export const HighlightItem = ({title, content}: {title: string, content: string}) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <span className="uppercase text-sm">{title}</span>
            <span className="text-lg lg:text-2xl">{content}</span>
        </div>
    )
}
