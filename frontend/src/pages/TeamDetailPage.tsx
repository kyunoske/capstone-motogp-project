import React from 'react';
import "./TeamDetailPage.css";
import {Team} from "../models/Team";
import {useParams} from "react-router-dom";

type TeamDetailPageProps = {
    teams: Team[];
}

function TeamDetailPage(props: TeamDetailPageProps) {

    const params = useParams();
    const id = params.id;

    if (id === undefined) {
        return (<>Team not found with this id!</>)
    }

    const team = props.teams.find((team) => team.id === id)
    console.log(team)

    if (team === undefined) {
        return (<>Sorry no team found!</>)
    }

    return (
        <div className="team-detail-info-container">
            <div className="team-detail-info-logo-bike">
                <div className="team-detail-logo-left">
                    <img src={team.logo} alt={team.logo} className="team-detail-logo"/>
                </div>
                <div className="team-detail-bike-right">
                    <img src={team.image1} alt={team.image1} className="team-detail-bike"/>
                </div>
            </div>
            <div className="team-championships-wins-right">
                <div className="team-championship-container">
                    <div className="team-championship-title">World Championship Titles</div>
                    <div className="team-championship-number">{team.championships}</div>
                </div>
                <div className="team-wins-container">
                    <div className="team-wins-title">Grand Prix Victories</div>
                    <div className="team-wins-number">{team.wins}</div>
                </div>
            </div>
            <div className="team-info-description-container">
                <div className="about-team">About {team.name}</div>
                <div className="team-info-description">{team.description}</div>
            </div>
        </div>
    );
}

export default TeamDetailPage;