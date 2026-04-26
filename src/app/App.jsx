import React from 'react';
import {AppProviders} from "@/app/providers/index.js";
import {AppShell} from "@/app/layout/index.js";
import {AppRouter} from "@/app/router/index.js";

const App = () => {
    return (
        <AppProviders>
            <AppShell>
                <AppRouter />
            </AppShell>
        </AppProviders>
    );
};

export default App;
