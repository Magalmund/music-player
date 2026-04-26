import React from 'react';
import {Link, useLocation} from "react-router";

const AppNavbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link className="brand-link" to="/">
                    <span className="brand-mark">MP</span>
                    <span>
                        <strong>Music Player</strong>
                        <small>Neumorphic control deck</small>
                    </span>
                </Link>
            </div>

            <div className="navbar-links">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                    All Songs
                </Link>
                <Link className={`nav-link ${location.pathname === "/playlist" ? "active" : ""}`} to="/playlist">
                    Playlist
                </Link>
            </div>
        </nav>
    );
};

export default AppNavbar;
