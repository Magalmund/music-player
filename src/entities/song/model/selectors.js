import allSongs from '@/entities/song/model/allSongs.js';

export const getSongs = () => allSongs;
export const getSongsCount = () => allSongs.length;
export const getSongById = (songId) => allSongs.find((song) => song.id === songId);
export const getSongIndexById = (songId) => allSongs.findIndex(song => song.id === songId);
export const getNextSong = (songId) => {
    if (allSongs.length === 0) return null;

    const currentIndex = getSongIndexById(songId);
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % allSongs.length;

    return allSongs[nextIndex] ?? null;
}

export const getPrevSong = (songId) => {
    if (allSongs.length === 0) return null;

    const currentIndex = getSongIndexById(songId);
    const prevIndex = currentIndex <= 0 ? allSongs.length - 1 : currentIndex - 1;

    return allSongs[prevIndex] ?? null;
};

export const searchSongs = (query, excludedSongIds = []) => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return [];

    return allSongs.filter((song) => {
        const matchesQuery =
            song.title.toLowerCase().includes(normalizedQuery) ||
            song.artist.toLowerCase().includes(normalizedQuery);

        return matchesQuery && !excludedSongIds.includes(song.id);
    });
};
