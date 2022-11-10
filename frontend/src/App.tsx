import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import useTeams from "./hooks/useTeams";
import TeamGallery from "./pages/team/TeamGallery";
import useRiders from "./hooks/useRiders";
import useTracks from "./hooks/useTracks";
import RiderDetailPage from "./pages/rider/RiderDetailPage";
import TeamDetailPage from "./pages/team/TeamDetailPage";
import TrackDetailPage from "./pages/track/TrackDetailPage";
import useArticles from "./hooks/useArticles";
import ArticleDetailPage from "./pages/article/ArticleDetailPage";
import Footer from "./components/Footer";

function App() {

    const {addTeam, teams, team, deleteTeam, editTeam} = useTeams();
    const {addRider, riders, rider, deleteRider, editRider} = useRiders();
    const {addTrack, tracks, track, deleteTrack, editTrack} = useTracks();
    const {article, articles, addArticle, deleteArticle, editArticle} = useArticles();

    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<LandingPage/>}/>
                    <Route path={"/homepage"} element={<HomePage
                        teams={teams}
                        team={team}
                        addTeam={addTeam}
                        riders={riders}
                        rider={rider}
                        addRider={addRider}
                        tracks={tracks}
                        track={track}
                        addTrack={addTrack}
                        articles={articles}
                        article={article}
                        addArticle={addArticle}
                    />}/>

                    <Route path={"/riders/:id"} element={<RiderDetailPage
                        riders={riders}
                        rider={rider}
                        editRider={editRider}
                        deleteRider={deleteRider}
                    />}/>

                    <Route path={"/teams/:id"} element={<TeamDetailPage
                        teams={teams}
                        team={team}
                        editTeam={editTeam}
                        deleteTeam={deleteTeam}
                    />}/>

                    <Route path={"/tracks/:id"} element={<TrackDetailPage
                        tracks={tracks}
                        track={track}
                        editTrack={editTrack}
                        deleteTrack={deleteTrack}
                    />}/>

                    <Route path={"/articles/:id"} element={<ArticleDetailPage
                        articles={articles}
                        article={article}
                        editArticle={editArticle}
                        deleteArticle={deleteArticle}
                    />}/>

                    <Route path={"/teams"} element={<TeamGallery teams={teams}/>}/>
                </Routes>

            </HashRouter>
            <Footer/>
        </div>
    );
}

export default App;
