interface DetailItemProps {
    label: string;
    value: string;
    link: boolean;
};

export const DetailItem = ({ label, value, link }: DetailItemProps) => {
    return (
        <div className="grid grid-cols-4">
            <span>{label}:</span>
            { link ?
                ( <a className="col-span-3 pointer-events-auto" href={value} target="blank">{value.slice(0, 40)}...</a>
                ) : (
                    <span className="col-span-3">{value}</span>
                )
            }
        </div>
    )
}

DetailItem.defaultProps = {
    link: false
};
