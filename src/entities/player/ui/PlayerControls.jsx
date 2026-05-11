import React, {memo} from 'react';
import {SkipBack, SkipForward} from "lucide-react";
import styles from "./PlayerControls.module.css";

const PlayerControls = memo(function PlayerControls({
                                                        isPlaying,
                                                        onTogglePlay,
                                                        onNext,
                                                        onPrev,
                                                        actionIcon,
                                                        disabled,
                                                        canGoNext,
                                                        canGoPrev,
}) {
    return (
        <div className={styles.controls}>
            <button
                className={styles.button}
                onClick={onPrev}
                aria-label="Previous track"
                disabled={disabled || !canGoPrev}
            >
                <SkipBack />
            </button>
            <button
                className={`${styles.button} ${styles.playButton}`}
                onClick={onTogglePlay}
                aria-label={isPlaying ? "Pause track" : "Play track"}
            >
                {actionIcon}
            </button>
            <button
                className={styles.button}
                onClick={onNext}
                aria-label="Next track"
                disabled={disabled || !canGoNext}
            >
                <SkipForward />
            </button>
        </div>
    );
});

export default PlayerControls;

