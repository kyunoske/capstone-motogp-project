import React from 'react';
import "./HomePage.css";
import {Team} from "../models/Team";
import TeamGallery from "./team/TeamGallery";
import RiderGallery from "./rider/RiderGallery";
import {Rider} from "../models/Rider";
import TrackGallery from "./track/TrackGallery";
import {Track} from "../models/Track";
import ArticleGallery from "./article/ArticleGallery";
import {Article} from "../models/Article";

type HomePageProps = {
    team: Team;
    teams: Team[];
    rider: Rider;
    riders: Rider[];
    track: Track;
    tracks: Track[];
    article: Article;
    articles: Article[];
    isLoggedIn: boolean;
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

                    <ArticleGallery articles={props.articles} isLoggedIn={props.isLoggedIn}/>

                </div>
                <div className="tab-pane fade container" id="riders">

                    <RiderGallery riders={props.riders} isLoggedIn={props.isLoggedIn}/>

                </div>
                <div className="tab-pane container fade" id="teams">

                    <TeamGallery teams={props.teams} isLoggedIn={props.isLoggedIn}/>

                </div>
                <div className="tab-pane container fade" id="tracks">

                    <TrackGallery tracks={props.tracks} isLoggedIn={props.isLoggedIn}/>

                </div>

            </div>
        </div>
    );
}

export default HomePage;