import Character from "../components/characters/Character";
import { useFetchCharacters } from "../hooks/useFetchCharacters";

export default function Characters () {

    const characters =  useFetchCharacters();

    return (
        <div className="min-h-screen bg-black p-20">
            {
                characters && (
                    <>
                        {
                            characters.map((character: any, index: number) => (
                                <div key={index}>
                                    <Character character={character} />
                                </div>
                            ))
                        }
                    </>
                )
            }
        </div>
    )
}
