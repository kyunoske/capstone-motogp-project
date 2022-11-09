import React, {FormEvent, useState} from 'react';
import {Rider} from "../../models/Rider";
import {useParams} from "react-router-dom";

type EditRiderProps = {
    rider: Rider;
    riders: Rider[];
    editRider: (id: string, rider: Rider) => void;
}

function EditRider(props: EditRiderProps) {

    const params = useParams();
    const id = params.id;

    const findRider = props.riders.find((rider) => rider.id === id);

    const [rider, setRider] = useState(findRider)
    const [firstName, setFirstName] = useState(findRider ? findRider.firstName : "")
    const [lastName, setLastName] = useState(findRider ? findRider.lastName : "")
    const [nameInitials, setNameInitials] = useState(findRider ? findRider.nameInitials : "")
    const [nationality, setNationality] = useState(findRider ? findRider.nationality : "")
    const [bike, setBike] = useState(findRider ? findRider.bike : "")
    const [bikeNumber, setBikeNumber] = useState(findRider ? findRider.bikeNumber : "")
    const [teamName, setTeamName] = useState(findRider ? findRider.teamName : "")
    const [dateOfBirth, setDateOfBirth] = useState(findRider ? findRider.dateOfBirth : "")
    const [height, setHeight] = useState(findRider ? findRider.height : "")
    const [weight, setWeight] = useState(findRider ? findRider.weight : "")
    const [motoGPDebut, setMotoGPDebut] = useState(findRider ? findRider.motoGPDebut : "")
    const [description, setDescription] = useState(findRider ? findRider.description : "")
    const [podiums, setPodiums] = useState(findRider ? findRider.podiums : "")
    const [wins, setWins] = useState(findRider ? findRider.wins : "")
    const [championships, setChampionships] = useState(findRider ? findRider.championships : "")
    const [numOfRacesMotoGP, setNumOfRacesMotoGP] = useState(findRider ? findRider.numOfRacesMotoGP : "")
    const [riderImage, setRiderImage] = useState(findRider ? findRider.riderImage : "")
    const [image1, setImage1] = useState(findRider ? findRider.image1 : "")
    const [image2, setImage2] = useState(findRider ? findRider.image2 : "")
    const [image3, setImage3] = useState(findRider ? findRider.image3 : "")
    const [image4, setImage4] = useState(findRider ? findRider.image4 : "")

    if (id === undefined) {
        return (<>Article not found with this id!</>)
    }

    if (findRider === undefined) {
        return (<>Sorry no article found!</>)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        let updatedRider = {
            id,
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

        setRider(updatedRider);
        if (updatedRider) {
            props.editRider(id, updatedRider);
        }
    }

    return (
        <div className="modal fade" id="exampleModal7" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Rider</h5>
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
                                value={firstName}
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="lastName"
                                required={true}
                                type="text"
                                value={lastName}
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="nameInitials"
                                type="text"
                                value={nameInitials}
                                placeholder="Name Initials"
                                onChange={(e) => setNameInitials(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="nationality"
                                type="text"
                                value={nationality}
                                placeholder="nationality"
                                onChange={(e) => setNationality(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="bike"
                                type="text"
                                value={bike}
                                placeholder="Bike"
                                onChange={(e) => setBike(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="bikeNumber"
                                type="text"
                                value={bikeNumber}
                                placeholder="Bike Number"
                                onChange={(e) => setBikeNumber(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="teamName"
                                type="text"
                                value={teamName}
                                placeholder="Team Name"
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="dateOfBirth"
                                type="text"
                                value={dateOfBirth}
                                placeholder="Date of Birth"
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="height"
                                type="text"
                                value={height}
                                placeholder="Height"
                                onChange={(e) => setHeight(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="weight"
                                type="text"
                                value={weight}
                                placeholder="Weight"
                                onChange={(e) => setWeight(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="motoGPDebut"
                                type="text"
                                value={motoGPDebut}
                                placeholder="MotoGP Debut"
                                onChange={(e) => setMotoGPDebut(e.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="description"
                                required={true}
                                rows={3}
                                value={description}
                                placeholder="Rider Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="podiums"
                                type="text"
                                value={podiums}
                                placeholder="Podiums"
                                onChange={(e) => setPodiums(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="wins"
                                type="text"
                                value={wins}
                                placeholder="Wins"
                                onChange={(e) => setWins(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="championships"
                                required={true}
                                type="text"
                                value={championships}
                                placeholder="Championships"
                                onChange={(e) => setChampionships(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="numOfRacesMotoGP"
                                type="text"
                                value={numOfRacesMotoGP}
                                placeholder="Number of Races in MotoGP"
                                onChange={(e) => setNumOfRacesMotoGP(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="riderImage"
                                type="text"
                                value={riderImage}
                                placeholder="Rider Image"
                                onChange={(e) => setRiderImage(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image1"
                                type="text"
                                value={image1}
                                placeholder="image1"
                                onChange={(e) => setImage1(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image2"
                                type="text"
                                value={image2}
                                placeholder="image2"
                                onChange={(e) => setImage2(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image3"
                                type="text"
                                value={image3}
                                placeholder="image3"
                                onChange={(e) => setImage3(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image4"
                                type="text"
                                value={image4}
                                placeholder="image4"
                                onChange={(e) => setImage4(e.target.value)}
                            />
                            <div className="button-group" style={{display: "flex", justifyContent: "space-evenly"}}>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal"
                                        style={{width: "200px"}}>Edit Rider
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

export default EditRider;