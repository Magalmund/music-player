import React from "react";
import { useLibrary } from "@/entities/playlist/index.js";
import {useTrackSearch} from "@/features/add-track-to-playlist/model/useTrackSearch.js";
import styles from "./AddTrackToPlaylist.module.css";

const AddTrackToPlaylist = ({ playlist }) => {

    const {addSongToPlaylist } = useLibrary();

    const {query, setQuery, filteredSongs, resetSearch, isOpen} = useTrackSearch(playlist);

    const handleAddSong = (song) => {
        addSongToPlaylist(playlist.id, song);
        resetSearch();
    };

    return (
        <div className={styles.root}>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search song to add..."
                    className={styles.input}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                {isOpen ? (
                    <div className={styles.dropdown}>
                        {filteredSongs.length === 0 ? (
                            <div className={`${styles.dropdownItem} ${styles.noResults}`}>No allSongs found</div>
                        ) : (
                            filteredSongs.slice(0, 5).map((song) => (
                                <div
                                    key={song.id}
                                    className={styles.dropdownItem}
                                    onClick={() => handleAddSong(song)}
                                >
                                    <span>{song.title}</span>
                                    <span>{song.artist}</span>
                                </div>
                            ))
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default AddTrackToPlaylist;
