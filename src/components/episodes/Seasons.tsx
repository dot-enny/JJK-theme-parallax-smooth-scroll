import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

interface SeasonProps {
    setSeasonId: (seasonNumber: number) => void;
}

export const Seasons = ({ setSeasonId } : SeasonProps) => {

    const [season1Data ,setSeason1Data] = useState<any>();
    const [season2Data ,setSeason2Data] = useState<any>();

    useEffect(() => {
        fetchSeason1Data();
        fetchSeason2Data();
    }, []);

    const fetchSeason1Data = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/40748`);
            const data = await response.json();
            setSeason1Data(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };
    const fetchSeason2Data = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/51009`);
            const data = await response.json();
            setSeason2Data(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

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
