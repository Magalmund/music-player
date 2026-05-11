import React, {memo} from 'react';
import styles from "./SongCard.module.css";

const SongCard = memo(function SongCard ({song, index, isActive, statusLabel, actionIcon, onPlay}) {
    return (
        <div
            className={`${styles.card} ${isActive ? styles.active : ""}`}
            onClick={onPlay}
        >
            <div className={styles.top}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.status}>{statusLabel}</span>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{song.title}</h3>
                <p className={styles.artist}>{song.artist}</p>
                <span className={styles.duration}>{song.duration}</span>
            </div>
            <div className={styles.playButton}>
                {actionIcon}
            </div>
        </div>
    );
});

export default SongCard;
