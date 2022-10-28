import React from 'react';
import "./RiderCard.css";
import {Rider} from "../models/Rider";
import {Button, Card} from "react-bootstrap";
import {Team} from "../models/Team";

type RiderCardProps = {
    rider: Rider;
    team: Team;
}

function RiderCard(props: RiderCardProps) {
    return (
        <Card style={{width: '13rem'}} className="rider-card-container">
            <Card.Img variant="top" className="rider-card-logo-image" src={props.rider.riderImage}/>
            <Card.Body className="rider-card-body">
                <Card.Title
                    style={{color: "#AEAEAE"}}>{props.rider.nameInitials}{props.rider.bikeNumber}</Card.Title>
                <Card.Text className="rider-card-text">
                    <span>{props.rider.firstName}</span>
                    <span><strong>{props.rider.lastName}</strong></span>
                </Card.Text>
                <Button variant="primary" className="rider-card-button">
                    More {props.rider.firstName}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default RiderCard;