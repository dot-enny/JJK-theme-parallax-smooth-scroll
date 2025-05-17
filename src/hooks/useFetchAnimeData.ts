import { useEffect, useState } from "react";
import { api } from "../api/api";

export function useFetchAnimeData(seasonId: number | null, page: number = 1, limit: number = 1) {
    const [animeData, setAnimeData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;
        
        if (seasonId !== null) {
            fetchAnimeData(ignore);
        }
        
        return () => {
            ignore = true;
        };
    }, [seasonId, page, limit]);

    const fetchAnimeData = async (ignore: boolean) => {
        setLoading(true);
        setError(null);
        try {
            const data = await api.get<any>(`/anime/${seasonId}/episodes?page=${page}&limit=${limit}`);
            if(ignore) return;
            setAnimeData(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
            setError("Error fetching anime data");
        } finally {
            setLoading(false);
        }
    };

    return { animeData, loading, error };
};