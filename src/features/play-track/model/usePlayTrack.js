import {usePlayback} from "@/entities/player/index.js";
import {useCallback} from "react";

export function usePlayTrack(track) {
    const {currentTrack, isPlaying, playTrack, togglePlay} = usePlayback();

    const isActive = currentTrack?.id === track?.id;
    const isCurrentTrackPlaying = isActive && isPlaying;

    const handlePlayTrack = useCallback(() => {
        if(!track) return;

        if(isActive) {
            togglePlay();
            return;
        }

        playTrack(track);
    }, [isActive, playTrack, togglePlay, track]);

    return {
        isActive,
        isCurrentTrackPlaying,
        handlePlayTrack
    }
}
