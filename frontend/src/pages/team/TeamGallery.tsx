import React, {useState} from 'react';
import "./TeamGallery.css";
import {Team} from "../../models/Team";
import TeamCard from "../../components/team/TeamCard";
import {Link} from "react-router-dom";

type TeamGalleryProps = {
    teams: Team[];
    isLoggedIn: boolean;
}

function TeamGallery(props: TeamGalleryProps) {
    const [data, setData] = useState("");
    const sorting = [...props.teams].sort((a, b) => a.name > b.name ? 1 : -1)
    const filteredTeams = sorting.filter((team) => team.name.toLowerCase().includes(data));

    return (

        <div>
            <div className="team-input-container">
                <Link to={"/"} className="link-to-themes">
                    <button className="btn button-add back-to-themes-team">Back to Themes
                    </button>
                </Link>
                <div className="input-group input-group-sm mb-3" style={{width: "50%"}}>
                    <input style={{width: "80%", borderRadius: "5px"}} type="text" placeholder="Find a team..."
                           onChange={(event) => setData(event.target.value)}/>
                </div>
            </div>


            <div className="team-gallery-mapped-cards">
                {filteredTeams.map((team, index) =>
                    <TeamCard team={team} key={index} isLoggedIn={props.isLoggedIn}/>
                )}
            </div>
        </div>
    );
}

export default TeamGallery;