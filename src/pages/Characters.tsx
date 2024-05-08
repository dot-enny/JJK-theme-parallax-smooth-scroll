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
