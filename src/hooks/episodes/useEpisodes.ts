import { useState } from "react";
import { useFetchAnimeData } from "../useFetchAnimeData";
import { useFetchAnimeVideosEpisodes } from "../useFetchAnimeVideosEpisodes";
import { useParams } from "react-router-dom";

export const useEpisodes = () => {
    const { seasonId } = useParams()

    const [pointerEvents, setPointerEvents] = useState<boolean>(false);
    const { animeData } = useFetchAnimeData(Number(seasonId));
    const animeEpisodeThumbNails = useFetchAnimeVideosEpisodes(Number(seasonId));

    const togglePointerEvents = () => {
        setPointerEvents(!pointerEvents);
    };

    return {
        pointerEvents,
        seasonId,
        togglePointerEvents,
        animeData,
        animeEpisodeThumbNails
    };    
}