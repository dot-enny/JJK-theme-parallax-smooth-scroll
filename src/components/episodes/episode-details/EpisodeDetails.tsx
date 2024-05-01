import { HideEpisodeDetails } from "./HideEpisodeDetails";

interface EpisodeProps {
    episode: any;
    toggleDetails: () => void;
}

export const EpisodeDetails = ({episode, toggleDetails}: EpisodeProps) => {
    return (
        <div className="z-20 bg-gradient-to-b from-purple-950/95 via-pink-950 to-black/95 fixed inset-0 rounded pointer-events-none">
            <HideEpisodeDetails toggleDetails={toggleDetails} />
            <div className="w-3/4 mx-auto pt-10">
                <div className="grid grid-cols-2">
                    <div className="font-semibold">
                        <div className="grid grid-cols-4">
                            <span>Episode:</span>
                            <span className="col-span-3">{episode.mal_id}</span>
                        </div>
                        <div className="grid grid-cols-4">
                            <span>Duration:</span>
                            <span className="col-span-3">{Math.round(episode.duration / 60)} minutes</span>
                        </div>
                        <div className="grid grid-cols-4">
                            <span>English Title:</span>
                            <span className="col-span-3">{episode.title}</span>
                        </div>
                        <div className="grid grid-cols-4">
                            <span>Japanese Title:</span>
                            <span className="col-span-3">{episode.title_japanese}</span>
                        </div>
                        <div className="grid grid-cols-4">
                            <span>Romanji Title:</span>
                            <span className="col-span-3">{episode.title_romanji}</span>
                        </div>
                        <div className="grid grid-cols-4">
                            <span>Aired:</span>
                            <span className="col-span-3">{episode.aired}</span>
                        </div>
                        <div className="grid grid-cols-4">
                            <span>MAL Reference:</span>
                            <a className="col-span-3" href={episode.url} target="blank" className="pointer-events-auto">{episode.url.slice(0, 40)}...</a>
                        </div>
                    </div>
                    <img src={episode.image} alt="episode image" className="justify-self-end self-center h-full" />
                </div>
                <p className="mt-32">{episode.synopsis}</p>
            </div>
        </div>
    )
};