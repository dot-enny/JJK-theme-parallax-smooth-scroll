export const HideEpisodeDetails = ({ toggleDetails } : {toggleDetails: () => void}) => {

    const path1Variants = {
        open: { d: "M3.06061 2.99999L21.0606 21" },
        closed: { d: "M0 8.5L24 8.5" },
    };

    const path2Variants = {
        open: { d: "M3.00006 21.0607L21 3.06064" },
        closed: { d: "M0 15.5L24 15.5" },
    };

    return (
        <button
            className="stroke-white absolute top-5 right-7 pointer-events-auto"
            onClick={toggleDetails}
        >
            <svg width="24" height="24" viewBox="0 0 24 24">
                <path {...path1Variants.open} />
                <path {...path2Variants.open} />
            </svg>
        </button>
    )
}