const PLAYLISTS_STORAGE_KEY = 'playlists';

export const getPlaylists = () => {
    try{
        const savedPlaylists = localStorage.getItem(PLAYLISTS_STORAGE_KEY);

        if(!savedPlaylists){
            return []
        }

        const parsedPlaylist = JSON.parse(savedPlaylists);

        return Array.isArray(parsedPlaylist) ? parsedPlaylist : [];
    } catch(error) {
        console.log("Local storage read error: " + error.message)
        return []
    }
}

export const savePlaylists = (playlists) => {
    try {
        localStorage.setItem(PLAYLISTS_STORAGE_KEY, JSON.stringify(playlists));
    } catch (error) {
        console.log("Local storage write error:", error);
    }
};

export const removePlaylists = () => {
    try {
        localStorage.removeItem(PLAYLISTS_STORAGE_KEY);
    } catch (error) {
        console.log("Local storage delete error:", error);
    }
};
