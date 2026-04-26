import React from 'react';
import {formatTime} from "@/shared/index.js";

const PlayerProgress = ({currentTime, duration, onSeek}) => {
    return (
        <div className="progress-container">
            <span className="time">{formatTime(currentTime)}</span>
            <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                className="progress-bar"
                onChange={(e) => onSeek(Number(e.target.value))}
            />

            <span className="time">{formatTime(duration)}</span>
        </div>
    );
};

export default PlayerProgress;
