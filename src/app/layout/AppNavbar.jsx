import React from 'react';
import {Link, useLocation} from "react-router";
import styles from "./AppNavbar.module.css";

const AppNavbar = () => {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <div>
                <Link className={styles.brandLink} to="/">
                    <span className={styles.brandMark}>MP</span>
                    <span>
                        <strong>Music Player</strong>
                        <small>Neumorphic control deck</small>
                    </span>
                </Link>
            </div>

            <div className={styles.links}>
                <Link className={`${styles.link} ${location.pathname === "/" ? styles.active : ""}`} to="/">
                    All Songs
                </Link>
                <Link className={`${styles.link} ${location.pathname === "/playlist" ? styles.active : ""}`} to="/playlist">
                    Playlist
                </Link>
            </div>
        </nav>
    );
};

export default AppNavbar;
