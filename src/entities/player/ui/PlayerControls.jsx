import React, {memo} from 'react';
import {SkipBack, SkipForward} from "lucide-react";

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
        <div className="controls">
            <button
                className="control-btn"
                onClick={onPrev}
                aria-label="Previous track"
                disabled={disabled || !canGoPrev}
            >
                <SkipBack />
            </button>
            <button
                className="control-btn play-btn"
                onClick={onTogglePlay}
                aria-label={isPlaying ? "Pause track" : "Play track"}
            >
                {actionIcon}
            </button>
            <button
                className="control-btn"
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


