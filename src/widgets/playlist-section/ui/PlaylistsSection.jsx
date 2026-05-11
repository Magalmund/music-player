import React from "react";
import { useLibrary } from "@/entities/playlist/index.js";
import { PlaylistCard } from "@/entities/playlist/index.js";
import { CreatePlaylist } from "@/features/create-playlist/index.js";
import { AddTrackToPlaylist } from "@/features/add-track-to-playlist/index.js";
import { DeletePlaylist } from "@/features/delete-playlist/index.js";
import {PlayableTrackRow} from "@/features/play-track/index.js";
import styles from "./PlaylistsSection.module.css";

const PlaylistsSection = () => {
    const { playlists } = useLibrary();

    return (
        <div>
            <div className={styles.heading}>
                <div>
                    <p className={styles.kicker}>Collections</p>
                    <h2>Playlist Studio</h2>
                </div>
                <span className={styles.badge}>{playlists.length} lists</span>
            </div>

            <CreatePlaylist />

            <div className={styles.list}>
                {playlists.length === 0 ? (
                    <p className={styles.emptyMessage}>No playlists created yet</p>
                ) : (
                    playlists.map((playlist) => (
                        <PlaylistCard
                            key={playlist.id}
                            playlist={playlist}
                            actions={<DeletePlaylist playlist={playlist} />}
                        >
                            <AddTrackToPlaylist playlist={playlist} />

                            <div className={styles.songs}>
                                {playlist.songs.length === 0 ? (
                                    <p className={styles.emptyPlaylist}>No songs in this playlist</p>
                                ) : (
                                    playlist.songs.map((track, index) => (
                                        <PlayableTrackRow
                                            key={track.id}
                                            track={track}
                                            index={index}
                                        />
                                    ))
                                )}
                            </div>
                        </PlaylistCard>
                    ))
                )}
            </div>
        </div>
    );
};

export default PlaylistsSection;
