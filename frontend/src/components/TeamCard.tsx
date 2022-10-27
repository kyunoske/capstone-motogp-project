import React from 'react';
import "./TeamCard.css";
import {Team} from "../models/Team";
import {Button, Card} from "react-bootstrap";

type TeamCardProps = {
    team: Team;
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
                <Button variant="primary" className="team-card-button">More {props.team.name}</Button>
            </Card.Body>
        </Card>
    );
}

export default TeamCard;