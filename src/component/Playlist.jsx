import React, {useState} from 'react';
import {useMusic} from "../contexts/MusicContext.jsx";

const Playlist = () => {

    const [newPlaylist, setNewPlaylist] = useState("");
    const [searchQueries, setSearchQueries] = useState({});
    const [openDropDownId, setOpenDropDownId] = useState(null);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null)

    const {playlists, addSongToPlaylist, createPlaylist, allSongs, currentTrack, handlePlaySong, deletePlaylist} = useMusic();

    const filteredSongs = allSongs.filter((song) => {
        const currentQuery = searchQueries[selectedPlaylist?.id] || ""

        const matches =
            song.title.toLowerCase().includes(currentQuery.toLowerCase()) ||
            song.artist.toLowerCase().includes(currentQuery.toLowerCase());

        const isAlreadyInPlaylist = selectedPlaylist?.songs.some((playlistSong) => playlistSong.id === song.id);

        return matches && !isAlreadyInPlaylist
    })

    const handleCreatePlaylist = () => {
        if (newPlaylist.trim()) {
            createPlaylist(newPlaylist.trim())
            setNewPlaylist("")
        }
    }

    const handleAddSong = (song) => {
        if (selectedPlaylist) {
            addSongToPlaylist(selectedPlaylist.id, song);
            setSearchQueries("");
            setOpenDropDownId(null);
        }
    }

    const deletePlaylistConfirmation = (playlist) => {
        if(window.confirm(`Are you sure you want to delete "${playlist.name}"?`)){
            deletePlaylist(playlist.id)
        }
    }

    return (
        <div className="playlists">
            <h2>Playlist</h2>
            <div className="create-playlist">
                <h3>Create New Playlist</h3>
                <div className="playlist-form">
                    <input
                        type="text"
                        placeholder="playlist-name"
                        className="playlist-input"
                        onChange={(e) => setNewPlaylist(e.target.value)}
                        value={newPlaylist}
                    />
                    <button className="create-btn" onClick={handleCreatePlaylist}>Create</button>
                </div>
            </div>


            <div className="playlists-list">
                {playlists.length === 0 ? (
                    <p className="empty-message">No playlists created yet</p>
                ) : (
                    playlists.map((playlist) => (
                        <div className="playlist-item" key={playlist.id}>
                            <div className="playlist-header">
                                <h3>{playlist.name}</h3>
                                <div className="playlist-actions">
                                    <button className="delete-playlist-btn" onClick={() => deletePlaylistConfirmation(playlist)}>Delete</button>
                                </div>
                            </div>

                            {/*Add Song Search*/}

                            <div className="add-song-section">
                                <div className="search-container">
                                    <input
                                        type="text"
                                        placeholder="Search songs to add..."
                                        className="song-search-input"
                                        value={searchQueries[playlist.id] || ""}
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            setSearchQueries((prev) => ({
                                                ...prev,
                                                [playlist.id]: value
                                            }))

                                            setSelectedPlaylist(playlist)
                                            setOpenDropDownId(value.length > 0 ? playlist.id : null);
                                        }}
                                        onFocus={() => {
                                            if (searchQueries[playlist.id]?.length > 0) {
                                                setSelectedPlaylist(playlist)
                                                setOpenDropDownId(playlist.id)
                                            }
                                        }}
                                    />
                                    {openDropDownId === playlist.id && (
                                        <div className="song-dropdown">
                                            {filteredSongs.length === 0 ? (
                                                <div className="dropdown-item no-results">
                                                    No songs found
                                                </div>
                                            ) : (
                                                filteredSongs.slice(0, 5).map((song) => (
                                                    <div key={song.id} className="dropdown-item"
                                                         onClick={() => handleAddSong(song)}>
                                                        <span>{song.title}</span>
                                                        <span>{song.artist}</span>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="playlist-songs">
                                {playlist.songs.length === 0 ? (
                                    <p className="empty-playlist">No songs in this playlist</p>
                                ) : (
                                    playlist.songs.map((song) => (
                                        <div
                                            key={song.id}
                                            className={`playlist-song ${currentTrack.id === song.id ? "active" : ""}`}
                                            onClick={() => handlePlaySong(song)}
                                        >
                                            {/*${currentTrackIndex === allSongs.findIndex((s) => s.id === song.id) ? "active" : ""}*/}
                                            <div className="song-info">
                                                <span className="song-title">{song.title}</span>
                                                <span className="song-artist">{song.artist}</span>
                                            </div>
                                            <span className="song-duration">{song.duration}</span>
                                        </div>
                                    ))
                                )}
                            </div>

                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Playlist;
