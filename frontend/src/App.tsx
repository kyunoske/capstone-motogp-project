import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import useTeams from "./hooks/useTeams";
import TeamGallery from "./pages/TeamGallery";
import useRiders from "./hooks/useRiders";
import useTracks from "./hooks/useTracks";
import RiderDetailPage from "./pages/RiderDetailPage";
import TeamDetailPage from "./pages/TeamDetailPage";
import TrackDetailPage from "./pages/TrackDetailPage";
import useArticles from "./hooks/useArticles";
import ArticleDetailPage from "./pages/article/ArticleDetailPage";
import Footer from "./components/Footer";

function App() {

    const {addTeam, teams, team} = useTeams();
    const {addRider, riders, rider} = useRiders();
    const {addTrack, tracks, track} = useTracks();
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
                    />}/>

                    <Route path={"/teams/:id"} element={<TeamDetailPage
                        teams={teams}
                    />}/>

                    <Route path={"/tracks/:id"} element={<TrackDetailPage
                        tracks={tracks}
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
