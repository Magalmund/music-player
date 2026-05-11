import React, {memo} from 'react';
import {getPlaylistTrackCount} from "@/entities/playlist/model/selectors.js";
import styles from "./PlaylistCard.module.css";

const PlaylistCard = memo(function PlaylistCardMemo({playlist, actions, children}) {

    const trackCount = getPlaylistTrackCount(playlist);

    return (
        <div className={styles.card} key={playlist.id}>
            <div className={styles.header}>
                <div>
                    <h3>{playlist.name}</h3>
                    <p className={styles.meta}>{trackCount} saved tracks</p>
                </div>
                {actions ? (
                    <div>{actions}</div>
                ) : null}
            </div>
            {children}
        </div>
    )
});

export default PlaylistCard;
