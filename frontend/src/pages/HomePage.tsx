import React, {useState} from 'react';
import "./HomePage.css";
import {Team} from "../models/Team";
import TeamGallery from "./team/TeamGallery";
import AddTeamModal from "../components/team/AddTeamModal";
import RiderGallery from "./rider/RiderGallery";
import {Rider} from "../models/Rider";
import AddRiderModal from "../components/rider/AddRiderModal";
import TrackGallery from "./track/TrackGallery";
import {Track} from "../models/Track";
import AddTrackModal from "../components/track/AddTrackModal";
import ArticleGallery from "./article/ArticleGallery";
import {Article} from "../models/Article";
import AddArticle from "../components/article/AddArticle";

type HomePageProps = {
    team: Team;
    teams: Team[];
    addTeam: (team: Team) => void;
    rider: Rider;
    riders: Rider[];
    addRider: (rider: Rider) => void;
    track: Track;
    tracks: Track[];
    addTrack: (track: Track) => void;
    article: Article;
    articles: Article[];
    addArticle: (article: Article) => void;
}

function HomePage(props: HomePageProps) {

    return (

        <div className="container" style={{marginTop: "10px"}}>
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                    <a className="nav-link active theme-tabs-text-color" data-bs-toggle="pill" href={"#news"}>News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link theme-tabs-text-color" data-bs-toggle="pill"
                       href={"#riders"}>Riders</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link theme-tabs-text-color" data-bs-toggle="pill" href={"#teams"}>Teams</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link theme-tabs-text-color" data-bs-toggle="pill" href={"#tracks"}>Tracks</a>
                </li>
            </ul>


            <div className="tab-content">
                <div className="tab-pane container active" id="news">
                    <ArticleGallery articles={props.articles}/>
                    <AddArticle article={props.article} addArticle={props.addArticle}/>
                    <button type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal4"
                            style={{
                                width: "30%",
                                display: "flex",
                                justifyContent: "center",
                                margin: "auto",
                                marginBottom: "55px",
                                marginTop: "55px"
                            }}
                    >
                        Add Article
                    </button>
                </div>
                <div className="tab-pane fade container" id="riders">
                    <RiderGallery riders={props.riders}/>
                    <AddRiderModal rider={props.rider} addRider={props.addRider}/>
                    <button type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            style={{
                                width: "30%",
                                display: "flex",
                                justifyContent: "center",
                                margin: "auto",
                                marginBottom: "55px",
                                marginTop: "55px"
                            }}
                    >
                        Add Rider
                    </button>
                </div>
                <div className="tab-pane container fade" id="teams">
                    <TeamGallery teams={props.teams}/>
                    <AddTeamModal team={props.team} addTeam={props.addTeam}/>
                    <button type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            style={{
                                width: "30%",
                                display: "flex",
                                justifyContent: "center",
                                margin: "auto",
                                marginBottom: "55px",
                                marginTop: "55px"
                            }}
                    >
                        Add Team
                    </button>
                </div>
                <div className="tab-pane container fade" id="tracks">
                    <TrackGallery tracks={props.tracks}/>
                    <AddTrackModal track={props.track} addTrack={props.addTrack}/>
                    <button type="button"
                            className="btn btn-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal3"
                            style={{
                                width: "30%",
                                display: "flex",
                                justifyContent: "center",
                                margin: "auto",
                                marginBottom: "55px",
                                marginTop: "55px"
                            }}
                    >
                        Add Track
                    </button>
                </div>

            </div>
        </div>
    );
}

export default HomePage;