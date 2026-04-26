import React from "react";
import { useLibrary } from "@/entities/playlist/index.js";
import {useTrackSearch} from "@/features/add-track-to-playlist/model/useTrackSearch.js";

const AddTrackToPlaylist = ({ playlist }) => {

    const {addSongToPlaylist } = useLibrary();

    const {query, setQuery, filteredSongs, resetSearch, isOpen} = useTrackSearch(playlist);

    const handleAddSong = (song) => {
        addSongToPlaylist(playlist.id, song);
        resetSearch();
    };

    return (
        <div className="add-song-section">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search song to add..."
                    className="song-search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                {isOpen ? (
                    <div className="song-dropdown">
                        {filteredSongs.length === 0 ? (
                            <div className="dropdown-item no-results">No allSongs found</div>
                        ) : (
                            filteredSongs.slice(0, 5).map((song) => (
                                <div
                                    key={song.id}
                                    className="dropdown-item"
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
