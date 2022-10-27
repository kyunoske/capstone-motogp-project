import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/homepage" element={<HomePage/>}/>
            </Routes>

        </HashRouter>
        
    );
}

export default App;
