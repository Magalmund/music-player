import React, {memo} from 'react';

const SongCard = memo(function SongCard ({song, index, isActive, statusLabel, actionIcon, onPlay}) {
    return (
        <div
            className={`song-card ${isActive ? "active" : ""}`}
            onClick={onPlay}
        >
            <div className="song-card-top">
                <span className="song-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="song-status">{statusLabel}</span>
            </div>
            <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
                <span className="song-duration">{song.duration}</span>
            </div>
            <div className="play-button">
                {actionIcon}
            </div>
        </div>
    );
});

export default SongCard;
