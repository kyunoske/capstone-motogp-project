import React from 'react';
import "./RiderCard.css";
import {Rider} from "../models/Rider";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

type RiderCardProps = {
    rider: Rider;
}

function RiderCard(props: RiderCardProps) {

    return (
        <Card style={{width: '13rem'}} className="rider-card-container">
            <Card.Img variant="top" className="rider-card-logo-image" src={props.rider.riderImage}/>
            <Card.Body className="rider-card-body">
                <Card.Title
                    style={{color: "#AEAEAE"}}>{props.rider.nameInitials}{props.rider.bikeNumber}&nbsp;
                    <img src={props.rider.nationality} alt={props.rider.nationality} className="rider-flag"/>
                </Card.Title>
                <Card.Text className="rider-card-text">
                    <span>{props.rider.firstName}</span>
                    <span><strong>{props.rider.lastName}</strong></span>
                </Card.Text>
                <Link style={{width: "100%", marginTop: "auto"}} to={"/riders/" + props.rider.id}>
                    <Button
                        variant="primary"
                        className="rider-card-button"
                    >
                        More {props.rider.firstName}
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default RiderCard;