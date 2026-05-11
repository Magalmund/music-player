import React, { useState } from "react";
import { useLibrary } from "@/entities/playlist/index.js";
import {validPlaylistName} from "@/features/create-playlist/model/validPlaylistName.js";
import styles from "./CreatePlaylist.module.css";

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
        <div className={styles.root}>
            <h3>Create New Playlist</h3>
            <p className={styles.copy}>Build a custom set, then search and add tracks directly into it.</p>

            <div className={styles.form}>
                <input
                    type="text"
                    placeholder="Midnight Drive"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className={styles.button} onClick={handleSubmit}>Create</button>
            </div>
        </div>
    );
};

export default CreatePlaylist;
