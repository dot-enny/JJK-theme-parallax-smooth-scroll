import React, { useContext, useState } from "react";

const EpisodeDetailContext = React.createContext<any>(null);
const EpisodeDetailUpdateContext = React.createContext<any>(null);

export const useEpisodeDetail = () => {
    return useContext(EpisodeDetailContext);
}

export const useEpisodeDetailUpdate = () => {
    return useContext(EpisodeDetailUpdateContext);
}

export const EpisodeDetailProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedEpisodeId, setSelectedEpisodeId] = useState<string | number>('');

    const toggleDetails = (episodeId: string) => {
        setSelectedEpisodeId(prevId => (prevId === episodeId ? 0 : episodeId));
    }

    return (
        <EpisodeDetailContext.Provider value={selectedEpisodeId}>
            <EpisodeDetailUpdateContext.Provider value={toggleDetails}>
                {children}
            </EpisodeDetailUpdateContext.Provider>
        </EpisodeDetailContext.Provider>
    )

}