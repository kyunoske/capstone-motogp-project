import React, {FormEvent, useState} from 'react';
import "./AddRiderModal.css";
import {Rider} from "../../models/Rider";

type AddRiderModalProps = {
    rider: Rider;
    addRider: (rider: Rider) => void;
}

function AddRiderModal(props: AddRiderModalProps) {

    const [rider, setRider] = useState(props.rider)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [nameInitials, setNameInitials] = useState("")
    const [nationality, setNationality] = useState("")
    const [bike, setBike] = useState("")
    const [bikeNumber, setBikeNumber] = useState("")
    const [teamName, setTeamName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [motoGPDebut, setMotoGPDebut] = useState("")
    const [description, setDescription] = useState("")
    const [podiums, setPodiums] = useState("")
    const [wins, setWins] = useState("")
    const [championships, setChampionships] = useState("")
    const [numOfRacesMotoGP, setNumOfRacesMotoGP] = useState("")
    const [riderImage, setRiderImage] = useState("")
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image4, setImage4] = useState("")

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        let rider = {
            firstName,
            lastName,
            nameInitials,
            nationality,
            bike,
            bikeNumber,
            teamName,
            dateOfBirth,
            height,
            weight,
            motoGPDebut,
            description,
            podiums,
            wins,
            championships,
            numOfRacesMotoGP,
            riderImage,
            image1,
            image2,
            image3,
            image4
        }

        setRider(rider);
        if (rider) {
            props.addRider(rider);
        }
    }

    return (
        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Rider</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} style={{
                            margin: "auto",
                            width: "95%"
                        }}>
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="firstName"
                                required={true}
                                type="text"
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="lastName"
                                required={true}
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="nameInitials"
                                type="text"
                                placeholder="Name Initials"
                                onChange={(e) => setNameInitials(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="nationality"
                                type="text"
                                placeholder="nationality"
                                onChange={(e) => setNationality(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="bike"
                                type="text"
                                placeholder="Bike"
                                onChange={(e) => setBike(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="bikeNumber"
                                type="text"
                                placeholder="Bike Number"
                                onChange={(e) => setBikeNumber(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="teamName"
                                type="text"
                                placeholder="Team Name"
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="dateOfBirth"
                                type="text"
                                placeholder="Date of Birth"
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="height"
                                type="text"
                                placeholder="Height"
                                onChange={(e) => setHeight(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="weight"
                                type="text"
                                placeholder="Weight"
                                onChange={(e) => setWeight(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="motoGPDebut"
                                type="text"
                                placeholder="MotoGP Debut"
                                onChange={(e) => setMotoGPDebut(e.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="description"
                                required={true}
                                rows={3}
                                placeholder="Rider Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="podiums"
                                type="text"
                                placeholder="Podiums"
                                onChange={(e) => setPodiums(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="wins"
                                type="text"
                                placeholder="Wins"
                                onChange={(e) => setWins(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="championships"
                                required={true}
                                type="text"
                                placeholder="Championships"
                                onChange={(e) => setChampionships(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="numOfRacesMotoGP"
                                type="text"
                                placeholder="Number of Races in MotoGP"
                                onChange={(e) => setNumOfRacesMotoGP(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="riderImage"
                                type="text"
                                placeholder="Rider Image"
                                onChange={(e) => setRiderImage(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image1"
                                type="text"
                                placeholder="image1"
                                onChange={(e) => setImage1(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image2"
                                type="text"
                                placeholder="image2"
                                onChange={(e) => setImage2(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image3"
                                type="text"
                                placeholder="image3"
                                onChange={(e) => setImage3(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image4"
                                type="text"
                                placeholder="image4"
                                onChange={(e) => setImage4(e.target.value)}
                            />
                            <div className="button-group-add-rider"
                                 style={{display: "flex", justifyContent: "space-evenly"}}>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal"
                                        style={{width: "200px"}}>Add Rider
                                </button>
                                <button type="button" className="btn btn-secondary" style={{width: "200px"}}
                                        data-bs-dismiss="modal">Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddRiderModal;