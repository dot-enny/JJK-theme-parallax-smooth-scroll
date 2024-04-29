import { HideEpisodeDetails } from "./HideEpisodeDetails";

interface EpisodeProps {
    episode: any;
    toggleDetails: () => void;
}

export const EpisodeDetails = ({episode, toggleDetails}: EpisodeProps) => {
    return (
        <div className="z-20 bg-gradient-to-b from-purple-950 via-pink-950 to-black fixed inset-20 rounded pointer-events-none">
            <HideEpisodeDetails toggleDetails={toggleDetails} />
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
                            <a href={episode.url} target="blank" className="pointer-events-auto">{episode.url.slice(0, 40)}...</a>
                        </div>
                    </div>
                    <img src={episode.image} alt="episode image" />
                </div>
                <p className="mt-32">{episode.synopsis}</p>
            </div>
        </div>
    )
};