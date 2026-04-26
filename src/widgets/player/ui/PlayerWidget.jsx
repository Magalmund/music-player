import React, {useRef} from 'react';
import {TrackInfo} from "@/entities/track/index.js";
import {getSongsCount} from "@/entities/song/index.js"
import {PlayerProgress, PlayerVolume, usePlayback} from "@/entities/player/index.js";
import {useAudioPlayer} from "@/entities/player/model/useAudioPlayer.js";
import {PlaybackControls} from "@/features/player-controls/index.js";

const PlayerWidget = () => {

    const audioRef = useRef(null);

    const { currentTrack, currentTrackIndex, isPlaying, nextTrack, setPlaying } = usePlayback();
    const totalTracks = getSongsCount();

    const player = useAudioPlayer({
        audioRef,
        src: currentTrack.url,
        isPlaying,
        onNext: nextTrack,
        onPlay: () => setPlaying (true),
        onPause: () => setPlaying (false),
    })

    if(!currentTrack) {
        return (
            <div className="music-player">
                <p className="empty-message">
                    No track selected
                </p>
            </div>
        )
    }

    return (
        <div className="music-player">
            <audio ref={audioRef} src={currentTrack?.url} preload="metadata"/>

            <TrackInfo
                track={currentTrack}
                isPlaying={isPlaying}
                positionLabel={`${String(currentTrackIndex + 1).padStart(2, "0")} / ${String(totalTracks).padStart(2, "0")}`}
                statusLabel={isPlaying ? "Streaming" : "Paused"}
            />
            <PlayerProgress
                currentTime={player.currentTime}
                duration={player.duration}
                onSeek={player.seek}
            />
            <PlaybackControls/>
            <PlayerVolume volume={player.volume} onChange={player.setVolume}/>
        </div>
    );
};

export default PlayerWidget;
