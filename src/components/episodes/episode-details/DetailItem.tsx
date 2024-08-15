interface DetailItemProps {
    label: string;
    value: string;
    link: boolean;
};

export const DetailItem = ({ label, value, link }: DetailItemProps) => {
    return (
        <div className="flex flex-wrap max-lg:gap-x-4 lg:grid grid-cols-4">
            <span className="max-lg:text-nowrap">{label}:</span>
            { link ?
                ( 
                    <>
                        <a className="col-span-3 pointer-events-auto max-md:hidden" href={value} target="blank">{value.slice(0, 40)}...</a>
                        <a className="col-span-3 pointer-events-auto md:hidden" href={value} target="blank">{value.slice(0, 20)}...</a>
                    </>
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
