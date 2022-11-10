import React from 'react';
import "../rider/RiderDetailPage.css";
import {Rider} from "../../models/Rider";
import {useParams} from "react-router-dom";
import EditRider from "../../components/rider/EditRider";
import DeleteRider from "../../components/rider/DeleteRider";

type AdminRiderDetailPageProps = {
    rider: Rider;
    riders: Rider[];
    editRider: (id: string, rider: Rider) => void;
    deleteRider: (id: string) => void;
}

function AdminRiderDetailPage(props: AdminRiderDetailPageProps) {

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
                        <div className="rider-info-bike">Bike:{rider.bike}</div>
                        <div className="rider-info-dob">Place of Birth: {rider.dateOfBirth}</div>
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
            <div className="riders-modal-button-group">
                <EditRider rider={props.rider} riders={props.riders} editRider={props.editRider}/>
                <button type="button"
                        className="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal7"
                        style={{
                            width: "30%",
                            justifyContent: "center",
                        }}
                >
                    Edit Rider
                </button>
                <DeleteRider rider={props.rider} deleteRider={props.deleteRider}
                             riders={props.riders}/>
                <button
                    className="btn me-md-2 btn-outline-danger"
                    style={{
                        width: "30%",
                        justifyContent: "center",
                    }}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal8"
                >Delete
                </button>

            </div>
        </div>
    );
}

export default AdminRiderDetailPage;