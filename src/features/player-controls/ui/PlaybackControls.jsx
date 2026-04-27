import {PlayerControls, usePlayback} from "@/entities/player/index.js";
import {getSongsCount} from "@/entities/song/index.js";
import {Play, Pause} from 'lucide-react'

const PlaybackControls = () => {
    const {currentTrack, isPlaying, togglePlay, nextTrack, prevTrack} = usePlayback();
    const totalTracks = getSongsCount();
    const hasTrack = Boolean(currentTrack);
    const hasQueue = totalTracks > 1;

    return (
        <PlayerControls
            isPlaying={isPlaying}
            actionIcon={isPlaying ? <Pause /> : <Play />}
            onTogglePlay={togglePlay}
            onNext={nextTrack}
            onPrev={prevTrack}
            disabled={!hasTrack}
            canGoNext={hasQueue}
            canGoPrev={hasQueue}
        />
    );
};

export default PlaybackControls;
