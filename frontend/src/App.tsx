import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import useTeams from "./hooks/useTeams";
import useRiders from "./hooks/useRiders";
import useTracks from "./hooks/useTracks";
import RiderDetailPage from "./pages/rider/RiderDetailPage";
import TeamDetailPage from "./pages/team/TeamDetailPage";
import TrackDetailPage from "./pages/track/TrackDetailPage";
import useArticles from "./hooks/useArticles";
import ArticleDetailPage from "./pages/article/ArticleDetailPage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import useUser from "./hooks/useUser";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminArticleDetailPage from "./pages/admin/AdminArticleDetailPage";
import AdminRiderDetailPage from "./pages/admin/AdminRiderDetailPage";
import AdminTeamDetailPage from "./pages/admin/AdminTeamDetailPage";
import AdminTrackDetailPage from "./pages/admin/AdminTrackDetailPage";
import Protected from "./components/Protected";
import {Toaster} from "react-hot-toast";

function App() {

    const {addTeam, teams, team, deleteTeam, editTeam} = useTeams();
    const {addRider, riders, rider, deleteRider, editRider} = useRiders();
    const {addTrack, tracks, track, deleteTrack, editTrack} = useTracks();
    const {addArticle, articles, article, deleteArticle, editArticle, isLoading} = useArticles();
    const {me, user, isLoggedIn, handleLogin, handleLogout, handleRegister} = useUser();

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    success: {
                        duration: 1500,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                    error: {
                        duration: 2000,
                        theme: {
                            primary: 'red',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<LandingPage user={user} isLoggedIn={isLoggedIn}/>}/>
                    <Route path={"/homepage"} element={<HomePage
                        teams={teams}
                        team={team}
                        riders={riders}
                        rider={rider}
                        tracks={tracks}
                        track={track}
                        articles={articles}
                        article={article}
                        isLoading={isLoading}
                    />}/>

                    <Route path={"/riders/:id"} element={<RiderDetailPage
                        riders={riders}
                        rider={rider}
                    />}/>

                    <Route path={"/teams/:id"} element={<TeamDetailPage
                        teams={teams}
                        team={team}
                    />}/>

                    <Route path={"/tracks/:id"} element={<TrackDetailPage
                        tracks={tracks}
                        track={track}
                    />}/>

                    <Route path={"/articles/:id"} element={<ArticleDetailPage
                        articles={articles}
                        article={article}
                    />}/>

                    <Route path={"/users"} element={<LoginPage
                        handleLogin={handleLogin}
                        handleRegister={handleRegister}
                        handleLogout={handleLogout}
                    />}/>

                    <Route element={<Protected isLoggedIn={isLoggedIn}/>}>
                        <Route path={"/admin/homepage"} element={
                            <AdminHomePage
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
                                handleLogout={handleLogout}
                                isLoading={isLoading}
                            />
                        }/>


                        <Route path={"/admin/articles/:id"} element={
                            <AdminArticleDetailPage
                                articles={articles}
                                article={article}
                                editArticle={editArticle}
                                deleteArticle={deleteArticle}
                            />
                        }/>

                        <Route path={"/admin/riders/:id"} element={
                            <AdminRiderDetailPage
                                riders={riders}
                                rider={rider}
                                editRider={editRider}
                                deleteRider={deleteRider}
                            />
                        }/>

                        <Route path={"/admin/teams/:id"} element={
                            <AdminTeamDetailPage
                                teams={teams}
                                team={team}
                                editTeam={editTeam}
                                deleteTeam={deleteTeam}
                            />
                        }/>

                        <Route path={"/admin/tracks/:id"} element={
                            <AdminTrackDetailPage
                                tracks={tracks}
                                track={track}
                                editTrack={editTrack}
                                deleteTrack={deleteTrack}
                            />
                        }/>
                    </Route>
                </Routes>

            </HashRouter>
            <Footer/>
        </div>
    );
}

export default App;
