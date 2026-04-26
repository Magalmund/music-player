import React from "react";
import { useLibrary } from "@/entities/playlist/index.js";

const DeletePlaylist = ({ playlist }) => {
    const { deletePlaylist } = useLibrary();

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${playlist.name}"?`)) {
            deletePlaylist(playlist.id);
        }
    };

    return (
        <button className="delete-playlist-btn" onClick={handleDelete}>
            Delete
        </button>
    );
};

export default DeletePlaylist;
