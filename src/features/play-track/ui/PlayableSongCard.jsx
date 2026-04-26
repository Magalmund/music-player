import {SongCard} from "@/entities/song/index.js";
import {usePlayTrack} from "@/features/play-track/model/usePlayTrack.js";

const PlayableSongCard = ({song, index}) => {
    const {isActive, isCurrentTrackPlaying, handlePlayTrack} = usePlayTrack(song);

    return (
        <SongCard
            song={song}
            index={index}
            isActive={isActive}
            statusLabel={isCurrentTrackPlaying ? "Live" : isActive ? "Paused" : "Ready"}
            actionIcon={isCurrentTrackPlaying ? "⏸" : "▶"}
            onPlay={handlePlayTrack}
        />
    );
};

export default PlayableSongCard;
