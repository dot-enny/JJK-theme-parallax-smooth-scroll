import { useFetchSeason } from "../../hooks/useFetchSeason";

interface SeasonProps {
    setSeasonId: (seasonNumber: number) => void;
}

export const Seasons = ({ setSeasonId } : SeasonProps) => {

    const season1Data = useFetchSeason(40748);
    const season2Data = useFetchSeason(51009);

    return (
        <div className="bg-black h-screen p-20 grid grid-cols-2 gap- gap-44">
            {
                season1Data ? (
                    <button className="bg-gray-500 h-[60%] group" onClick={() => setSeasonId(40748)}>
                        <img src={season1Data.images.webp.large_image_url} alt="season 1 thumbnail" className="w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                        <h1 className="text-xl font-serif mt-10">Season 1</h1>
                    </button>
                ) : (
                    <>
                        <div className="bg-gray-500  bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse"/>
                        <div className="bg-gray-500  bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse" />
                    </>
                )
            }

            {
                season2Data ? (
                    <button className="bg-gray-500 h-[60%] group" onClick={() => setSeasonId(51009)}>
                        <img src={season2Data.images.webp.large_image_url} alt="season 2 thumbnail" className="w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out" />
                        <h1 className="text-xl font-serif mt-10">Season 2</h1>
                    </button>
                ) : (
                    <>
                        <div className="bg-gray-500  bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse"/>
                        <div className="bg-gray-500  bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse" />
                    </>
                )
            }
        </div>
    )
}
