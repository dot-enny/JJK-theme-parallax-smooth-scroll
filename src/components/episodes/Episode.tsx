import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

export default function Episode({ episodeId, image }: { episodeId: number, image: string }) {
    const [episodeData, setEpisodeData] = useState<any>(null);
    const [episodeDetails, setEpisodeDetails] = useState<any>(null);

    const toggleEpisodeDetails = () => {
        setEpisodeDetails(!episodeDetails); // Toggle state on click
    };

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
                    <div 
                        className="m-auto grid cursor-pointer"
                        onClick={toggleEpisodeDetails}
                    >
                        {episodeData.mal_id && <img src={image} alt="episode image" />}
                        <div className="flex justify-start text-lg font-semibold cursor-pointer mt-5">
                            <span>{episodeData.mal_id}</span>
                            <span className="mr-2">.</span>
                            <span>{episodeData.title.slice(0, 20)}</span>
                        </div>

                        {episodeDetails && 
                            <EpisodeDetails episode={{image, ...episodeData}} toggleDetails={toggleEpisodeDetails} />}
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
        <div className="bg-gradient-to-b from-purple-950 via-pink-950 to-black fixed inset-20 rounded cursor-pointer">
            <div 
                className="text-3xl absolute top-0 right-0"
                onClick={() => toggleDetails(false)}
            >
                    x
            </div>
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