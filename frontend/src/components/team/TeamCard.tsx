import React from 'react';
import "./TeamCard.css";
import {Team} from "../../models/Team";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

type TeamCardProps = {
    team: Team;
    isLoggedIn: boolean;
}

function TeamCard(props: TeamCardProps) {
    return (
        <Card style={{width: '18rem'}} className="team-card-container">
            <Card.Img variant="top" className="team-card-logo-image" src={props.team.logo}/>
            <Card.Img variant="top" src={props.team.image1}/>
            <Card.Body className="team-card-body">
                <Card.Title></Card.Title>
                <Card.Text>
                </Card.Text>
                {props.isLoggedIn ?
                    <Link style={{width: "100%", marginTop: "auto"}} to={"/admin/teams/" + props.team.id}>
                        <Button className="team-card-button">More {props.team.name}</Button>
                    </Link> :
                    <Link style={{width: "100%", marginTop: "auto"}} to={"/teams/" + props.team.id}>
                        <Button className="team-card-button">More {props.team.name}</Button>
                    </Link>}
            </Card.Body>
        </Card>
    );
}

export default TeamCard;