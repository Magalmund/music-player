import React, {memo} from 'react';

const PlayerVolume = memo(function PlayerVolume({volume, onChange}) {
    return (
        <div className="volume-container">
            <span className="volume-icon">Volume</span>
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                className="volume-bar"
                value={volume}
                onChange={(e) => onChange(Number(e.target.value))}
            />
            <span className="volume-value">{Math.round((volume || 0) * 100)}%</span>
        </div>
    );
});

export default PlayerVolume;
