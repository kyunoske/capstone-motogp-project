import React from 'react';
import {Team} from "../models/Team";
import TeamCard from "../components/TeamCard";

type TeamGalleryProps = {
    teams: Team[];
}

function TeamGallery(props: TeamGalleryProps) {

    const sorting = [...props.teams].sort((a, b) => a.name > b.name ? 1 : -1)
    return (
        <div style={{display: "flex", flexWrap: "wrap", margin: "auto"}}>
            {sorting.map((team, index) =>
                <TeamCard team={team} key={index}/>
            )}
        </div>
    );
}

export default TeamGallery;