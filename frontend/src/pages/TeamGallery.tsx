import React, {useState} from 'react';
import "./TeamGallery.css";
import {Team} from "../models/Team";
import TeamCard from "../components/TeamCard";

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
                <div className="input-group input-group-sm mb-3">
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