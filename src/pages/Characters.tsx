import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

export default function Characters () {

    const [characters, setCharacters] =  useState<any>();

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/40748/characters`);
            const data = await response.json();
            setCharacters(data.data);
            console.log(data.data[0])
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    return (
        <div className="min-h-screen bg-black p-20">
            {
                characters && (
                    <>
                        {
                            characters.map((character: any, index: number) => (
                                <div key={index} className="h-[50vh] w-1/ my-20 flex justify-around shadow shadow-gray-800">
                                    <img src={character.character.images.webp.image_url} alt={character.name} className="" />
                                    <div className="flex flex-col gap-5 text-end">
                                        <span className="text-3xl font-light">{character.character.name}</span>
                                        <span className="font-semibold">{character.role}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                )
                
            }
        </div>
    )
}
