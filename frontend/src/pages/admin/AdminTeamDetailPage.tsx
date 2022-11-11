import React from 'react';
import "../team/TeamDetailPage.css";
import {Team} from "../../models/Team";
import {Link, useParams} from "react-router-dom";
import EditTeam from "../../components/team/EditTeam";
import DeleteTeam from "../../components/team/DeleteTeam";

type AdminTeamDetailPageProps = {
    teams: Team[];
    team: Team;
    editTeam: (id: string, team: Team) => void;
    deleteTeam: (id: string) => void;
}

function AdminTeamDetailPage(props: AdminTeamDetailPageProps) {

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
            <Link to={"/admin/homepage"} className="link-to-homepage">
                <button className="btn button-add back-to-homepage-rider">Back to Admin Teams
                </button>
            </Link>
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
            <div className="team-modal-button-group">
                <EditTeam team={props.team} teams={props.teams} editTeam={props.editTeam}/>
                <button type="button"
                        className="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal9"
                        style={{
                            width: "30%",
                            justifyContent: "center",
                        }}
                >
                    Edit Team
                </button>
                <DeleteTeam team={props.team} deleteTeam={props.deleteTeam}
                            teams={props.teams}/>
                <button
                    className="btn me-md-2 btn-outline-danger"
                    style={{
                        width: "30%",
                        justifyContent: "center",
                    }}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal10"
                >Delete
                </button>
            </div>
        </div>
    );
}

export default AdminTeamDetailPage;