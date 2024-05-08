import { useFetchSeason } from "../../hooks/useFetchSeason";
import { SeasonCard } from "./SeasonCard";

interface SeasonProps {
    setSeasonId: (seasonNumber: number) => void;
}

export const Seasons = ({ setSeasonId } : SeasonProps) => {

    const season1Data = useFetchSeason(40748);
    const season2Data = useFetchSeason(51009);

    return (
        <div className="bg-black h-screen p-20 grid grid-cols-2 gap-44">
            <SeasonCard seasonData={season1Data} setSeasonId={setSeasonId} />
            <SeasonCard seasonData={season2Data} setSeasonId={setSeasonId} />
        </div>
    )
}
