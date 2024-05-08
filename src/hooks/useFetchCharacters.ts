import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

export function useFetchCharacters() {
    const [characters, setCharacters] =  useState<any>();

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/40748/characters`);
            const data = await response.json();
            setCharacters(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };
    return characters;
};