import React, {memo} from 'react';
import {getPlaylistTrackCount} from "@/entities/playlist/model/selectors.js";

const PlaylistCard = memo(function PlaylistCardMemo({playlist, actions, children}) {

    const trackCount = getPlaylistTrackCount(playlist);

    return (
        <div className="playlist-item" key={playlist.id}>
            <div className="playlist-header">
                <div>
                    <h3>{playlist.name}</h3>
                    <p className="playlist-meta">{trackCount} saved tracks</p>
                </div>
                {actions ? (
                    <div className="playlist-actions">{actions}</div>
                ) : null}
            </div>
            {children}
        </div>
    )
});

export default PlaylistCard;
