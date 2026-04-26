import React, {memo} from 'react';

const TrackInfo = memo(function TrackInfo({track, isPlaying, positionLabel, statusLabel}) {

    return (
        <div>
            <div className="player-art">
                <div className={`art-disc ${isPlaying ? "spinning" : ""}`}>
                    <div className="art-core"/>
                </div>
            </div>

            <div className="track-info">
                <h3 className="track-title">{track.title}</h3>
                <p className="track-artist">{track.artist}</p>
            </div>

            <div className="player-stats">
                <div className="player-stat">
                    <span>Track</span>
                    <strong>{positionLabel}</strong>
                </div>
                <div className="player-stat">
                    <span>Status</span>
                    <strong>{statusLabel}</strong>
                </div>
            </div>
        </div>
    );
});

export default TrackInfo;
