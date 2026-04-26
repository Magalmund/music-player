import {TrackRow} from "@/entities/track/index.js";
import {usePlayTrack} from "@/features/play-track/model/usePlayTrack.js";

const PlayableTrackRow = ({track, index}) => {
    const {isActive, handlePlayTrack} = usePlayTrack(track);

    return (
        <TrackRow
            track={track}
            isActive={isActive}
            onPlay={handlePlayTrack}
            positionLabel={String(index + 1).padStart(2, "0")}
        />
    );
};

export default PlayableTrackRow;
