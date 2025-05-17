import { SeasonCard } from "../components/seasons/SeasonCard";
import { useFetchSeason } from "../hooks/useFetchSeason";

export const Seasons = () => {
    const season1Data = useFetchSeason(40748);
    const season2Data = useFetchSeason(51009);

    return (
        <div className="grid lg:grid-cols-2 h-screen mt-1 snap-mandatory snap-y max-sm:overflow-y-scroll">
            <SeasonCard seasonData={season1Data} />
            <SeasonCard seasonData={season2Data} />
        </div>
    )
}

