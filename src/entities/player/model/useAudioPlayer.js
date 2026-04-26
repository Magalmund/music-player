import {useEffect, useEffectEvent, useState} from "react";

export function useAudioPlayer({audioRef, src, isPlaying, onNext, onPlay, onPause, initialVolume = 0.5}) {

    const [volume, setVolumeState] = useState(initialVolume);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleEnded = useEffectEvent(() => {
        onNext?.();
    })

    const handlePlay = useEffectEvent(() => {
        onPlay?.(true)
    })

    const handlePause = useEffectEvent(() => {
        if (audioRef.current?.ended) return;
        onPause?.(false);
    })


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = volume;
    }, [audioRef, volume]);


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if(!src) {
            audio.pause();
            return;
        }

        if (isPlaying) {
            audio.play().catch((error) => {
                if (error.name !== "AbortError") {
                    console.error(error);
                }
            });
        } else {
            audio.pause();
        }
    }, [audioRef, isPlaying, src]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleLoadStart = () => {
            setCurrentTime(0);
            setDuration(0);
        };
        const handleLoadedMetadata = () => {
            setDuration(audio.duration || 0);
        }
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
        const handleDurationChange = () => {
            setDuration(audio.duration || 0);
        }


        audio.addEventListener("loadstart", handleLoadStart);
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("durationchange", handleDurationChange);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);
        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);

        return () => {
            audio.removeEventListener("loadstart", handleLoadStart);
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("durationchange", handleDurationChange);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
        };

    }, [audioRef]);


    const seek = (time) => {
        const audio = audioRef.current;
        if (!audio) return;

        const nextTime = Math.min(Math.max(time, 0), duration || 0);
        audio.currentTime = nextTime;
        setCurrentTime(nextTime);
    };

    const setVolume = (nextVolume) => {
        const normalized = Math.min(Math.max(nextVolume, 0), 1);
        setVolumeState(normalized);
    }

    return {
        currentTime,
        duration,
        volume,
        seek,
        setVolume,
    };
}
