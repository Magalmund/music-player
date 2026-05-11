import React, {memo} from 'react';
import styles from "./PlayerVolume.module.css";

const PlayerVolume = memo(function PlayerVolume({volume, onChange}) {
    return (
        <div className={styles.container}>
            <span className={styles.icon}>Volume</span>
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                className={styles.bar}
                value={volume}
                onChange={(e) => onChange(Number(e.target.value))}
            />
            <span className={styles.value}>{Math.round((volume || 0) * 100)}%</span>
        </div>
    );
});

export default PlayerVolume;
