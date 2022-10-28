import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import useTeams from "./hooks/useTeams";
import TeamGallery from "./pages/TeamGallery";
import useRiders from "./hooks/useRiders";

function App() {

    const {
        addTeam,
        teams,
        team
    } = useTeams();

    const {
        addRider,
        riders,
        rider
    } = useRiders();

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/homepage" element={<HomePage
                    teams={teams}
                    team={team}
                    addTeam={addTeam}
                    riders={riders}
                    rider={rider}
                    addRider={addRider}
                />}/>
                <Route path="/teams" element={<TeamGallery teams={teams}/>}/>
            </Routes>

        </HashRouter>

    );
}

export default App;
