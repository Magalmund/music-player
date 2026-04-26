import React from 'react';
import {getSongs, getSongsCount} from "@/entities/song/index.js";
import {PlayableSongCard} from "@/features/play-track/index.js";

const SongsList = () => {
    const songs = getSongs();


    return (
        <div className="all-songs">
            <div className="section-heading">
                <div>
                    <p className="section-kicker">Library</p>
                    <h2>All Songs</h2>
                </div>
                <span className="section-badge">{getSongsCount()} tracks</span>
            </div>
            <div className="songs-grid">
                {songs.map((song, index) => (
                    <PlayableSongCard
                        key={song.id}
                        song={song}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SongsList;
