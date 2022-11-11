import React, {useState} from 'react';
import "./TeamGallery.css";
import {Team} from "../../models/Team";
import TeamCard from "../../components/team/TeamCard";
import {Link} from "react-router-dom";

type TeamGalleryProps = {
    teams: Team[];
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

            <div style={{display: "flex", flexWrap: "wrap", margin: "auto"}}>
                {filteredTeams.map((team, index) =>
                    <TeamCard team={team} key={index}/>
                )}
            </div>
        </div>
    );
}

export default TeamGallery;