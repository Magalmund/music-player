// import {useState} from "react";
//
// const songs = [
//     {
//         id: 1,
//         title: "Breaching",
//         artist: "Magalmund",
//         url: "/songs/Breaching.wav",
//         duration: "3:45",
//     },
//     {
//         id: 2,
//         title: "Forgotten Memories",
//         artist: "Magalmund",
//         url: "/songs/Forgotten Memories.wav",
//         duration: "3:12",
//     },
//     {
//         id: 3,
//         title: "Glacier Blue",
//         artist: "Magalmund",
//         url: "/songs/Glacier Blue.wav",
//         duration: "3:28",
//     },
//     {
//         id: 4,
//         title: "In Love",
//         artist: "Magalmund",
//         url: "/songs/In Love.wav",
//         duration: "3:15",
//     },
//
// ]
//
// export const useMusic = () => {
//     const [allSongs, setAllSongs] = useState(songs);
//     const [currentTrack, setCurrentTrack] = useState(songs[0]);
//     const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
//     const [currentTime, setCurrentTime] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [volume, setVolume] = useState(0.5);
//
//     const handlePlaySong = (song, id) => {
//         setCurrentTrack(song);
//         setCurrentTrackIndex(id);
//         setIsPlaying(false);
//     }
//
//     const nextTrack = () => {
//         setCurrentTrackIndex((prev) => {
//             const nextIndex = (prev + 1) % allSongs.length;
//             setCurrentTrack(allSongs[nextIndex]);
//             return nextIndex
//         })
//         setIsPlaying(false);
//     }
//
//     const prevTrack = () => {
//         setCurrentTrackIndex((prev) => {
//             const prevIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
//             setCurrentTrack(allSongs[prevIndex]);
//             return prevIndex
//         })
//         setIsPlaying(false);
//     }
//
//     const formatTime = (time) => {
//         if(isNaN(time) || time === undefined) return "0:00"
//
//         const minutes = Math.floor(time / 60);
//         const seconds = Math.floor(time % 60);
//
//         return `${minutes}:${seconds.toString().padStart(2,"0")}`
//     }
//
//     return {
//         allSongs,
//         handlePlaySong,
//         currentTrackIndex,
//         currentTrack,
//         currentTime,
//         setCurrentTime,
//         formatTime,
//         duration,
//         setDuration,
//         nextTrack,
//         prevTrack,
//         isPlaying,
//         setIsPlaying,
//         volume,
//         setVolume
//     }
// }
