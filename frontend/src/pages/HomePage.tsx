import React from 'react';
import "./HomePage.css";
import {Team} from "../models/Team";
import TeamGallery from "./TeamGallery";
import AddTeamModal from "../components/AddTeamModal";

type HomePageProps = {
    team: Team;
    teams: Team[];
    addTeam: (team: Team) => void;
}

function HomePage(props: HomePageProps) {
    return (

        <div className="container" style={{marginTop: "10px"}}>
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="pill" href={"#riders"}>Riders</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href={"#teams"}>Teams</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href={"#tracks"}>Tracks</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href={"#forum"}>Forum</a>
                </li>
            </ul>


            <div className="tab-content">
                <div className="tab-pane container active" id="riders">
                    Some Text
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
                <div className="tab-pane container fade" id="tracks">This is a setting tab using pill data-toggle
                    attribute.
                </div>
                <div className="tab-pane container fade" id="forum">This is a setting tab using pill data-toggle
                    attribute.
                </div>
            </div>
        </div>
    );
}

export default HomePage;