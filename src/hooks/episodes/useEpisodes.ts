import { useState } from "react";
import { useFetchAnimeData } from "../useFetchAnimeData";
import { useFetchAnimeVideosEpisodes } from "../useFetchAnimeVideosEpisodes";

export const useEpisodes = (initialSeasonId?: number) => {
    const [pointerEvents, setPointerEvents] = useState<boolean>(false);
    const [seasonId, setSeasonId] = useState<number | null>(initialSeasonId ?? null);
    const { animeData } = useFetchAnimeData(seasonId);
    const animeEpisodeThumbNails = useFetchAnimeVideosEpisodes(seasonId);

    const togglePointerEvents = () => {
        setPointerEvents(!pointerEvents);
    };

    return {
        pointerEvents,
        seasonId,
        setSeasonId,
        togglePointerEvents,
        animeData,
        animeEpisodeThumbNails
    };    
}