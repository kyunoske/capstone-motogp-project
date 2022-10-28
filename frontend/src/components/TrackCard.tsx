import React from 'react';
import "./TrackCard.css";
import {Track} from "../models/Track";
import {Button, Card} from "react-bootstrap";

type TrackCardProps = {
    track: Track;
}

function TrackCard(props: TrackCardProps) {
    return (
        <Card style={{width: '18rem'}} className="track-card-container">
            <Card.Img variant="top" className="track-card-logo-image" src={props.track.image}/>
            <Card.Body className="track-card-body">
                <Card.Title>{props.track.name}</Card.Title>
                <Card.Text>
                    {props.track.country}&nbsp;{props.track.countryFlag}
                </Card.Text>
                <Button variant="primary" className="track-card-button">More {props.track.name}</Button>
            </Card.Body>
        </Card>
    );
}

export default TrackCard;