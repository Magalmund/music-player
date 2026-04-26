import React, { memo } from "react";

const TrackRow = memo(function TrackRow({ track, isActive = false, onPlay, positionLabel }) {
    return (
        <div
            className={`playlist-song ${isActive ? "active" : ""}`}
            onClick={onPlay}
        >
            <span className="playlist-song-index">{positionLabel}</span>

            <div className="song-info">
                <span className="song-title">{track.title}</span>
                <span className="song-artist">{track.artist}</span>
            </div>

            <span className="song-duration">{track.duration}</span>
        </div>
    );
});

export default TrackRow;
