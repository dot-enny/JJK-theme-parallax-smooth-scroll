import { useEffect, useState } from "react";
import { api } from "../api/api";

export function useFetchSeason(seasonId: number) {
    const [seasonData, setSeasonData] = useState<any>(null);
    
    useEffect(() => {
        fetchSeason(seasonId);
    }, [seasonId]);

    const fetchSeason = async (id: number) => {
        try {
            const data = await api.get<{ data: any }>(`/anime/${id}`);
            setSeasonData(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    return seasonData;
};