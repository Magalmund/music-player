import React, {memo} from 'react';
import styles from "./TrackInfo.module.css";

const TrackInfo = memo(function TrackInfo({track, isPlaying, positionLabel, statusLabel}) {

    return (
        <div>
            <div className={styles.art}>
                <div className={`${styles.disc} ${isPlaying ? styles.spinning : ""}`}>
                    <div className={styles.core}/>
                </div>
            </div>

            <div className={styles.info}>
                <h3 className={styles.title}>{track.title}</h3>
                <p className={styles.artist}>{track.artist}</p>
            </div>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span>Track</span>
                    <strong>{positionLabel}</strong>
                </div>
                <div className={styles.stat}>
                    <span>Status</span>
                    <strong>{statusLabel}</strong>
                </div>
            </div>
        </div>
    );
});

export default TrackInfo;
