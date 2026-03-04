import React from 'react';
import {useMusic} from "../contexts/MusicContext.jsx";

const AllSongs = () => {
    const {allSongs, handlePlaySong, currentTrack} = useMusic();
    return (
        <div className="all-songs">
            <h2>All Songs ({allSongs.length})</h2>
            <div className="songs-grid">
                {allSongs.map((song) => (
                    <div
                        key={song.id}
                        className={`song-card ${currentTrack.id === song.id ? "active" : ""}`}
                        onClick={() => handlePlaySong(song)}
                    >
                        <div className="song-info">
                            <h3 className="song-title">{song.title}</h3>
                            <p className="song-artist">{song.artist}</p>
                            <span className="song-duration">{song.duration}</span>
                        </div>
                        <div className="play-button">
                            {currentTrack.id === song.id ? "♪" : "▶"}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllSongs;
