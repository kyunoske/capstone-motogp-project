import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import useTeams from "./hooks/useTeams";
import TeamGallery from "./pages/TeamGallery";

function App() {

    const {
        addTeam,
        teams,
        team
    } = useTeams();

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/homepage" element={<HomePage
                    teams={teams}
                    team={team}
                    addTeam={addTeam}
                />}/>
                <Route path="/teams" element={<TeamGallery teams={teams}/>}/>
            </Routes>

        </HashRouter>
        
    );
}

export default App;
