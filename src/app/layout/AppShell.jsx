import React from 'react';
import AppNavbar from "@/app/layout/AppNavbar.jsx";
import {PlayerWidget} from "@/widgets/player/index.js";

const AppShell = ({children}) => {
    return (
        <div className="app">
            <div className="background-orb background-orb-left"/>
            <div className="background-orb background-orb-right"/>

            <div className="app-shell">
                <AppNavbar/>

                <main className="app-main">
                    <div className="player-section">
                        <PlayerWidget/>
                    </div>

                    <div className="content-section">{children}</div>
                </main>
            </div>
        </div>
    );
};

export default AppShell;
