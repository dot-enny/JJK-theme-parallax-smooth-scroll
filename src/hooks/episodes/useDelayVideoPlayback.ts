import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useAnimationUpdate } from "../../context/AnimationContext";

export const useDelayVideoPlayback = (videoRef: React.RefObject<HTMLVideoElement>) => {
    const isLoaded = useAnimation();
    const updateIsLoaded = useAnimationUpdate();

    useEffect(() => {
        if (isLoaded && videoRef.current) {
            videoRef.current.play();
            videoRef.current.playbackRate = 0.5;
            setTimeout(() => {
                if(videoRef.current)
                    videoRef.current.playbackRate = 1;
            }, 5000);
        } 
    }, [isLoaded, videoRef]);

    useEffect(() => {
        if (videoRef.current) {
            const video = videoRef.current;
            const handleCanPlay = () => updateIsLoaded();
            
            if (video.readyState >= 3) {
                console.log('video ready state', video.readyState);
                handleCanPlay();
            } else {
                video.addEventListener("canplay", handleCanPlay, { once: true });
            }
        }
    }, [videoRef]);
}