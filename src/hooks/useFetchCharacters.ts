import { useEffect, useState } from "react";
import { api } from "../api/api";

export function useFetchCharacters() {
    const [characters, setCharacters] =  useState<any>();

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        try {
            const data = await api.get<{ data: any }>(`/anime/40748/characters`);
            setCharacters(data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };
    return characters;
};