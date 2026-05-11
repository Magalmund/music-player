import React from 'react';
import {formatTime} from "@/shared/index.js";
import styles from "./PlayerProgress.module.css";

const PlayerProgress = ({currentTime, duration, onSeek}) => {
    return (
        <div className={styles.container}>
            <span className={styles.time}>{formatTime(currentTime)}</span>
            <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                className={styles.bar}
                onChange={(e) => onSeek(Number(e.target.value))}
            />

            <span className={styles.time}>{formatTime(duration)}</span>
        </div>
    );
};

export default PlayerProgress;
