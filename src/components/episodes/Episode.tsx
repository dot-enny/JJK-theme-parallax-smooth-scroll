import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

export default function Episode({ episodeId, image }: { episodeId: number, image: string }) {
    const [episodeData, setEpisodeData] = useState<any>(null);
    const [episodeDetails, setEpisodeDetails] = useState<any>(null);

    useEffect(() => {
        fetchEpisodeData();
    }, []);

    const fetchEpisodeData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/40748/episodes/${episodeId}`);
            const data = await response.json();
            setEpisodeData(data.data);
            episodeId == 1 ? console.log(data) : null;
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    return (
        <>
            {episodeData && (
                <>
                    <div className="p-4 h-[50vh] min-h-screen sm:px-20 py-24 grid gap-12 items-center">
                        {episodeData.mal_id && <img src={image} alt="episode image" className="justify-self-center" />}
                        <div className="rounded-lg">
                            <div className="flex justify-between text-lg font-semibold mb-9">
                                <span>{episodeData.mal_id}</span>
                                <span>{episodeData.title}</span>
                            </div>
                            <p className="">{episodeData.synopsis.slice(0, 300)}...</p>
                            <span
                                className="underline text-gray-400 cursor-pointer"
                                onClick={() => setEpisodeDetails(true)}
                            >
                                see details
                            </span>
                        </div>

                        {episodeDetails && 
                            <EpisodeDetails episode={{image, ...episodeData}} toggleDetails={setEpisodeDetails} />}
                    </div>
                </>
            )}
        </>
    );
}

interface EpisodeProps {
    episode: any;
    toggleDetails: (isMenuOpen: boolean) => void;
}

const EpisodeDetails = ({episode, toggleDetails}: EpisodeProps) => {
    return (
        <div
            onClick={() => toggleDetails(false)}
            className="bg-gradient-to-b from-purple-950 via-purple-900 to-black fixed inset-20 rounded cursor-pointer opacity-95"
        >
            <div className="w-3/4 mx-auto pt-10">
                <div className="grid grid-cols-2">
                    <div className="font-semibold">
                        <div className="grid grid-cols-2">
                            <span>Episode:</span>
                            <span>{episode.mal_id}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span>Duration:</span>
                            <span>{Math.round(episode.duration / 60)} minutes</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span>English Title:</span>
                            <span>{episode.title}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span>Japanese Title:</span>
                            <span>{episode.title_japanese}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span>Romanji Title:</span>
                            <span>{episode.title_romanji}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span>Aired:</span>
                            <span>{episode.aired}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span>MAL Reference:</span>
                            <a href={episode.url} target="blank">{episode.url.slice(0, 40)}...</a>
                        </div>
                    </div>
                    <img src={episode.image} alt="episode image" className="ml-auto" />
                </div>
                <p className="mt-32">{episode.synopsis}</p>
            </div>
        </div>
    )
};