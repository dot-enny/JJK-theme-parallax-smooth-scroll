import { DetailItem } from "./DetailItem";
import { HideEpisodeDetails } from "./HideEpisodeDetails";

interface EpisodeProps {
    episode: any;
    toggleDetails: () => void;
}

export const EpisodeDetails = ({ episode, toggleDetails }: EpisodeProps) => {
    return (
        <div className="z-20 bg-gradient-to-b from-purple-950/95 via-pink-950 to-black/95 fixed inset-0 rounded pointer-events-none">
            <HideEpisodeDetails toggleDetails={toggleDetails} />
            <div className="w-3/4 mx-auto pt-10">
                <div className="grid grid-cols-2">
                    <div>
                        <DetailItem label="Episode" value={episode.mal_id} />
                        <DetailItem label="Duration" value={`${Math.round(episode.duration / 60)} minutes`} />
                        <DetailItem label="English Title" value={episode.title} />
                        <DetailItem label="Japanese Title" value={episode.title_japanese} />
                        <DetailItem label="Romanji Title" value={episode.title_romanji} />
                        <DetailItem label="Aired" value={episode.aired} />
                        <DetailItem link label="MAL Reference" value={episode.url} />
                    </div>
                    {/* episode thumbnail */}
                    <img src={episode.image} alt="episode image" className="justify-self-end self-center h-full" />
                </div>
                {/* episode synopsis */}
                <p className="mt-32">{episode.synopsis}</p>
            </div>
        </div>
    )
};