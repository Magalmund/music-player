import {BrowserRouter, Route, Routes} from "react-router";
import AllSongs from "./component/AllSongs.jsx";
import Playlist from "./component/Playlist.jsx";
import MusicPlayer from "./component/MusicPlayer.jsx";
import {MusicProvider} from "./contexts/MusicContext.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {

    return (
        <BrowserRouter>
            <MusicProvider>
                <div className="app">
                    <Navbar/>
                    <main className="app-main">
                        <div className="player-section">
                            <MusicPlayer/>
                        </div>
                        <div className="content-section">
                            <Routes>
                                <Route path="/" element={<AllSongs/>}/>
                                <Route path="/playlist" element={<Playlist/>}/>
                            </Routes>
                        </div>
                    </main>
                </div>
            </MusicProvider>
        </BrowserRouter>
    )
}

export default App
