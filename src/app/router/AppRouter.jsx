import React, {lazy, Suspense} from 'react';
import Loader from "@/shared/ui/Loader/Loader.jsx";
import {Route, Routes} from "react-router";

const SongsPage = lazy(() => import('@/pages/songs/index.js'));
const PlaylistsPage = lazy(() => import('@/pages/playlists/index.js'));


const AppRouter = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/" element={<SongsPage/>}/>
                <Route path="/playlist" element={<PlaylistsPage/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
