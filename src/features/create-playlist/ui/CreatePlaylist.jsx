import React, { useState } from "react";
import { useLibrary } from "@/entities/playlist/index.js";
import {validPlaylistName} from "@/features/create-playlist/model/validPlaylistName.js";

const CreatePlaylist = () => {
    const [name, setName] = useState("");
    const { createPlaylist } = useLibrary();

    const handleSubmit = () => {
        const validName = validPlaylistName(name);

        console.log(validName);

        if(!validName) return;

        createPlaylist(validName);
        setName("");
    };

    return (
        <div className="create-playlist">
            <h3>Create New Playlist</h3>
            <p className="section-copy">Build a custom set, then search and add tracks directly into it.</p>

            <div className="playlist-form">
                <input
                    type="text"
                    placeholder="Midnight Drive"
                    className="playlist-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="create-btn" onClick={handleSubmit}>Create</button>
            </div>
        </div>
    );
};

export default CreatePlaylist;
