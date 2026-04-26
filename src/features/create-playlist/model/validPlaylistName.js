export const validPlaylistName = (name) => {
    const trimmedName = name.trim();
    return trimmedName ? trimmedName : null;
}
