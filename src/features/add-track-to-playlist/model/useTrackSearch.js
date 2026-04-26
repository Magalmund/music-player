import {useDeferredValue, useMemo, useState} from "react";
import {searchSongs} from "@/entities/song/index.js";

export const useTrackSearch = (playlist) => {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

    const excludedSongIds = useMemo(() => {
        return playlist?.songs?.map((song) => song.id)
    }, [playlist?.songs])

    const filteredSongs = useMemo(() => {
        return searchSongs(deferredQuery, excludedSongIds);
    },[deferredQuery, excludedSongIds]);

    const resetSearch = () => {
        setQuery('');
    };

    return {
        query,
        setQuery,
        filteredSongs,
        resetSearch,
        isOpen: query.trim().length > 0,
    }
}
