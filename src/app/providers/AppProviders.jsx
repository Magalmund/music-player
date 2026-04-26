import React from 'react';
import { PlaybackProvider } from "@/entities/player/index.js";
import {LibraryProvider} from "@/entities/playlist/index.js";
import {BrowserRouter} from "react-router";

const AppProviders = ({children}) => {
    return (
        <BrowserRouter>
            <LibraryProvider>
                <PlaybackProvider>
                    {children}
                </PlaybackProvider>
            </LibraryProvider>
        </BrowserRouter>
    );
};

export default AppProviders;
