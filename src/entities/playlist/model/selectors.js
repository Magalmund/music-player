export const getPlaylistTrackCount = (playlist) => playlist?.songs?.length ?? 0;

export const isTrackInPlaylist = (playlist, trackId) =>
    playlist?.songs?.some((song) => song.id === trackId) ?? false;
