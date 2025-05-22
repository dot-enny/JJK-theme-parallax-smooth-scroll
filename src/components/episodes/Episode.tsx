import { useEffect } from "react";
import { EpisodeDetails } from "./episode-details/EpisodeDetails"
import { AnimatePresence } from "framer-motion";
import { useFetchEpisode } from "../../hooks/useFetchEpisode";
import { useEpisodeDetail, useEpisodeDetailUpdate } from "../../context/EpisodeDetailContext";


export default function Episode({ episodeId, image, setPointerEvents, seasonId }: { episodeId: number, image: string, setPointerEvents: () => void, seasonId: string | undefined }) {
    const { episodeData, isLoading, isError } = useFetchEpisode(Number(seasonId), episodeId);
    const selectedEpisodeId = useEpisodeDetail();
    const toggleDetails = useEpisodeDetailUpdate();

    const handleClick = () => {
        if(isError && isLoading) return;
        toggleDetails(episodeId);
        setPointerEvents();
    }

    useEffect(() => {
        document.body.style.overflow = selectedEpisodeId ? "hidden" : "auto";
    }, [selectedEpisodeId])

    return (
        <>
            {/* episode card */}
            <button
                className="m-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={handleClick}
            >
                {isLoading ? (
                    <Loading episodeId={episodeId} />
                ) : isError ? (
                    <Retry episodeId={episodeId} />
                ) : episodeData ? (
                    <>
                        <img
                            src={image}
                            alt="episode image"
                            className="w-[200px] h-[113px]"
                        />
                        <div className="flex justify-start text-lg font-semibold cursor-pointer mt-5">
                            <span>{episodeData.mal_id}</span>
                            <span className="mr-2">.</span>
                            <span>{episodeData.title.slice(0, 20)}</span>
                        </div>
                    </>
                ) : null}
            </button>

            {/* episode details */}
            <AnimatePresence>
                {(selectedEpisodeId == episodeId) && episodeData &&
                    <EpisodeDetails episode={{ image, ...episodeData }} toggleDetails={handleClick} />}
            </AnimatePresence>
        </>
    );
}

const Loading = ({ episodeId }: { episodeId: number }) => {
    return (
        <div>
            <div className="w-[200px] h-[113px] bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse" />
            <div className="flex justify-start text-lg font-semibold cursor-pointer mt-5">
                <span>{episodeId}</span>
                <span className="mr-2">.</span>
                <span className="w-full bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse"></span>
            </div>
        </div>
    )
}

const Retry = ({ episodeId }: { episodeId: number }) => {
    return (
        <div>
            <div className="w-[200px] h-[113px] grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="flex justify-start text-lg font-semibold cursor-pointer mt-5">
                <span>{episodeId}</span>
                <span className="mr-2">.</span>
                <span className="w-full"></span>
            </div>
        </div>
    )
}


