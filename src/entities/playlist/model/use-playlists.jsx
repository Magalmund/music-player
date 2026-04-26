import {createContext, useContext, useEffect, useState} from "react";
import {getPlaylists, removePlaylists, savePlaylists} from "@/shared/index.js";

const LibraryContext = createContext(null);

export function LibraryProvider({children}) {
    const [playlists, setPlaylists] = useState(getPlaylists);

    useEffect(() => {
        if (playlists.length > 0) {
            savePlaylists(playlists);
        } else {
            removePlaylists();
        }

    }, [playlists]);

    const createPlaylist = (name) => {
        const newPlaylist = {
            id: Date.now(),
            name,
            songs: [],
        }
        setPlaylists((prev) => [...prev, newPlaylist]);
    };

    const addSongToPlaylist = (playlistId, song) => {
        setPlaylists((prev) =>
            prev.map((playlist) =>
                playlist.id === playlistId
                    ? {...playlist, songs: [...playlist.songs, song]}
                    : playlist
            )
        );
    };

    const deletePlaylist = (id) => {
        setPlaylists((prev) => prev.filter((playlist) => playlist.id !== id));
    };

    return (
        <LibraryContext.Provider
            value={{playlists, createPlaylist, addSongToPlaylist, deletePlaylist}}
        >
            {children}
        </LibraryContext.Provider>
    );
}

export function useLibrary() {
    const value = useContext(LibraryContext);
    if (!value) throw new Error("useLibrary must be used inside LibraryProvider");
    return value;
}
