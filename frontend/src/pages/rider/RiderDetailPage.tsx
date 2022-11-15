import React from 'react';
import "./RiderDetailPage.css";
import {Rider} from "../../models/Rider";
import {Link, useParams} from "react-router-dom";

type RiderDetailPageProps = {
    rider: Rider;
    riders: Rider[];
}

function RiderDetailPage(props: RiderDetailPageProps) {

    const params = useParams();
    const id = params.id;

    if (id === undefined) {
        return (<>Rider not found with this id!</>)
    }

    const rider = props.riders.find((rider) => rider.id === id)

    if (rider === undefined) {
        return (<>Sorry no rider found!</>)
    }

    return (
        <div className="rider-info-container">
            <Link to={"/homepage"} className="link-to-homepage-rider">
                <button className="btn button-add back-to-homepage-rider">Back to Riders
                </button>
            </Link>
            <div className="rider-info-left-right-container">
                <div className="rider-image-container-left">
                    <img src={rider.riderImage} alt={rider.firstName} className="rider-info-rider-image"/>
                    <div className="rider-info">
                        <div className="rider-info-flag-country">
                            <img src={rider.nationality} alt={rider.nationality} className="rider-info-flag"/>
                        </div>
                        <div className="rider-info-first-name">{rider.firstName}</div>
                        <div className="rider-info-last-name">{rider.lastName}</div>
                        <div className="rider-info-team-name">Team: {rider.teamName}</div>
                        <br/>
                        <div className="rider-info-bike">Bike: {rider.bike}</div>
                        <div className="rider-info-dob">Date of Birth: {rider.dateOfBirth}</div>
                        <div className="rider-info-height">Height: {rider.height}</div>
                        <div className="rider-info-weight">Weight: {rider.weight}</div>
                        <div className="rider-info-debut">MotoGP Debut: {rider.motoGPDebut}</div>
                    </div>
                </div>
                <div className="rider-championships-wins-right">
                    <div className="rider-championship-container">
                        <div className="rider-championship-title">World Championship Titles</div>
                        <div className="rider-championship-number">{rider.championships}</div>
                    </div>
                    <div className="rider-wins-container">
                        <div className="rider-wins-title">Grand Prix Victories</div>
                        <div className="rider-wins-number">{rider.wins}</div>
                    </div>
                </div>
            </div>
            <div className="rider-info-description-container">
                <div className="about-rider">About {rider.firstName}&nbsp;{rider.lastName}</div>
                <div className="rider-info-description">{rider.description}</div>
            </div>
        </div>
    );
}

export default RiderDetailPage;