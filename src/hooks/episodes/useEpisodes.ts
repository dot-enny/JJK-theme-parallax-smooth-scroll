import { useState } from "react";
import { useFetchAnimeData } from "../useFetchAnimeData";
import { useFetchAnimeVideosEpisodes } from "../useFetchAnimeVideosEpisodes";

export const useEpisodes = (initialSeasonId?: string | null) => {
    const [pointerEvents, setPointerEvents] = useState<boolean>(false);
    const [seasonId, setSeasonId] = useState<string | null>(initialSeasonId ?? null);
    const { animeData } = useFetchAnimeData(Number(seasonId));
    const animeEpisodeThumbNails = useFetchAnimeVideosEpisodes(Number(seasonId));

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