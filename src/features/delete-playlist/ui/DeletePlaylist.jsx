import React from "react";
import { useLibrary } from "@/entities/playlist/index.js";
import styles from "./DeletePlaylist.module.css";

const DeletePlaylist = ({ playlist }) => {
    const { deletePlaylist } = useLibrary();

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${playlist.name}"?`)) {
            deletePlaylist(playlist.id);
        }
    };

    return (
        <button className={styles.button} onClick={handleDelete}>
            Delete
        </button>
    );
};

export default DeletePlaylist;
