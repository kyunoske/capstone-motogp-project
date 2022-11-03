import React from 'react';
import "./TrackCard.css";
import {Track} from "../models/Track";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

type TrackCardProps = {
    track: Track;
}

function TrackCard(props: TrackCardProps) {
    return (
        <Card style={{width: '18rem'}} className="track-card-container">
            <Card.Img variant="top" className="track-card-logo-image" src={props.track.image}/>
            <div className="track-round">{props.track.round}</div>
            <Card.Body className="track-card-body">
                <Card.Title>{props.track.name}</Card.Title>
                <Card.Text>
                    {props.track.country}&nbsp;
                    <img src={props.track.countryFlag} alt={props.track.countryFlag} className="track-flag"/>
                </Card.Text>
                <Link style={{width: "100%", marginTop: "auto"}} to={"/tracks/" + props.track.id}>
                    <Button className="track-card-button">More {props.track.name}</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default TrackCard;