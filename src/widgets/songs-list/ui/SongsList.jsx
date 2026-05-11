import React from 'react';
import {getSongs, getSongsCount} from "@/entities/song/index.js";
import {PlayableSongCard} from "@/features/play-track/index.js";
import styles from "./SongsList.module.css";

const SongsList = () => {
    const songs = getSongs();


    return (
        <div>
            <div className={styles.heading}>
                <div>
                    <p className={styles.kicker}>Library</p>
                    <h2>All Songs</h2>
                </div>
                <span className={styles.badge}>{getSongsCount()} tracks</span>
            </div>
            <div className={styles.grid}>
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
