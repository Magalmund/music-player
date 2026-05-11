import React from 'react';
import AppNavbar from "@/app/layout/AppNavbar.jsx";
import {PlayerWidget} from "@/widgets/player/index.js";
import styles from "./AppShell.module.css";

const AppShell = ({children}) => {
    return (
        <div className={styles.app}>
            <div className={`${styles.backgroundOrb} ${styles.backgroundOrbLeft}`}/>
            <div className={`${styles.backgroundOrb} ${styles.backgroundOrbRight}`}/>

            <div className={styles.shell}>
                <AppNavbar/>

                <main className={styles.main}>
                    <div className={styles.playerSection}>
                        <PlayerWidget/>
                    </div>

                    <div className={styles.contentSection}>{children}</div>
                </main>
            </div>
        </div>
    );
};

export default AppShell;
