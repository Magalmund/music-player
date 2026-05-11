import React, { memo } from "react";
import styles from "./TrackRow.module.css";

const TrackRow = memo(function TrackRow({ track, isActive = false, onPlay, positionLabel }) {
    return (
        <div
            className={`${styles.row} ${isActive ? styles.active : ""}`}
            onClick={onPlay}
        >
            <span className={styles.index}>{positionLabel}</span>

            <div className={styles.info}>
                <span>{track.title}</span>
                <span className={styles.artist}>{track.artist}</span>
            </div>

            <span className={styles.duration}>{track.duration}</span>
        </div>
    );
});

export default TrackRow;
