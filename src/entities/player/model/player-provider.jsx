/* eslint-disable react-refresh/only-export-components */
import {createContext, useCallback, useContext, useReducer} from "react";
import {getSongs, getSongIndexById, getNextSong, getPrevSong, getSongById} from "@/entities/song/index.js";

const PlaybackContext = createContext(null);


function playbackReducer(state, action) {
    switch (action.type) {
        case "set_playing":
            return {
                ...state,
                isPlaying: action.payload
            }
        case "play_track":
            return {
                ...state,
                currentTrackId: action.payload,
                isPlaying: true
            };
        case "toggle_play":
            return {
                ...state,
                isPlaying: !state.isPlaying,
            };
        case "set_track":
            return {
                ...state,
                currentTrackId: action.payload,
            };
        default:
            return state;
    }
}


export function PlaybackProvider({children}) {

    const songs = getSongs();

    const [state, dispatch] = useReducer(playbackReducer, {
        currentTrackId: songs[0]?.id ?? null,
        isPlaying: false,
    });

    const currentTrackIndex = getSongIndexById(state.currentTrackId);
    const currentTrack = getSongById(state.currentTrackId) ?? songs[0] ?? null;

    const playTrack = useCallback((song) => {
        dispatch({ type: "play_track", payload: song.id });
    }, [])

    const togglePlay = useCallback(() => {
        dispatch({type: "toggle_play"});
    },[])

    const nextTrack = useCallback(() => {
        const nextSong = getNextSong(state.currentTrackId);
        if (!nextSong) return;

        dispatch({ type: "set_track", payload: nextSong.id });
    }, [state.currentTrackId]);

    const prevTrack = useCallback(() => {
        const prevSong = getPrevSong(state.currentTrackId);
        if (!prevSong) return;

        dispatch({ type: "set_track", payload: prevSong.id });
    }, [state.currentTrackId]);

    const setPlaying = useCallback((value) => {
        dispatch({type: "set_playing", payload: value})
    }, [])



    const value = {
        currentTrack,
        currentTrackIndex,
        isPlaying: state.isPlaying,
        playTrack,
        togglePlay,
        nextTrack,
        prevTrack,
        setPlaying
    };

    return <PlaybackContext.Provider value={value}>{children}</PlaybackContext.Provider>;
}

export function usePlayback() {
    const value = useContext(PlaybackContext);
    if (!value) throw new Error("usePlayback must be used inside PlaybackProvider");
    return value;
}
