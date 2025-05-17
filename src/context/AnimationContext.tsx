import React, { useContext, useState } from "react";

const AnimationContext = React.createContext<any>(null);
const AnimationUpdateContext = React.createContext<any>(null);

export const useAnimation = () => {
    return useContext(AnimationContext);
}

export const useAnimationUpdate = () => {
    return useContext(AnimationUpdateContext);
}

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const handleSetIsLoaded = () => {
        setIsLoaded(true);
    }

    return (
        <AnimationContext.Provider value={isLoaded}>
            <AnimationUpdateContext.Provider value={handleSetIsLoaded}>
                {children}
            </AnimationUpdateContext.Provider>
        </AnimationContext.Provider>
    )

}