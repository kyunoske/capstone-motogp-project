import React, {FormEvent, useState} from 'react';
import "./EditTeam.css";
import {Team} from "../../models/Team";
import {useParams} from "react-router-dom";

type EditTeamProps = {
    team: Team;
    teams: Team[];
    editTeam: (id: string, team: Team) => void;
}

function EditTeam(props: EditTeamProps) {

    const params = useParams();
    const id = params.id;

    const findTeam = props.teams.find((team) => team.id === id);

    const [team, setTeam] = useState(findTeam)
    const [name, setName] = useState(findTeam ? findTeam.name : "")
    const [description, setDescription] = useState(findTeam ? findTeam.description : "")
    const [logo, setLogo] = useState(findTeam ? findTeam.logo : "")
    const [rider1, setRider1] = useState(findTeam ? findTeam.rider1 : "")
    const [rider2, setRider2] = useState(findTeam ? findTeam.rider2 : "")
    const [rider3, setRider3] = useState(findTeam ? findTeam.rider3 : "")
    const [image1, setImage1] = useState(findTeam ? findTeam.image1 : "")
    const [image2, setImage2] = useState(findTeam ? findTeam.image2 : "")
    const [image3, setImage3] = useState(findTeam ? findTeam.image3 : "")
    const [image4, setImage4] = useState(findTeam ? findTeam.image4 : "")
    const [image5, setImage5] = useState(findTeam ? findTeam.image5 : "")
    const [wins, setWins] = useState(findTeam ? findTeam.wins : "")
    const [championships, setChampionships] = useState(findTeam ? findTeam.championships : "")

    if (id === undefined) {
        return (<>Team not found with this id!</>)
    }

    if (findTeam === undefined) {
        return (<>Sorry no team found!</>)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let updatedTeam: Team = {
            id,
            name,
            description,
            logo,
            rider1,
            rider2,
            rider3,
            image1,
            image2,
            image3,
            image4,
            image5,
            wins,
            championships
        }

        setTeam(updatedTeam);

        props.editTeam(id, updatedTeam);
    }

    return (
        <div className="modal fade" id="exampleModal9" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Team</h5>
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
                                name="name"
                                required={true}
                                type="text"
                                value={name}
                                placeholder="Team Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="description"
                                required={true}
                                rows={3}
                                value={description}
                                placeholder="Team Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="logo"
                                type="text"
                                value={logo}
                                placeholder="Team Logo"
                                onChange={(e) => setLogo(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="rider1"
                                type="text"
                                value={rider1}
                                placeholder="rider1"
                                onChange={(e) => setRider1(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="rider2"
                                type="text"
                                value={rider2}
                                placeholder="rider2"
                                onChange={(e) => setRider2(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="rider3"
                                type="text"
                                value={rider3}
                                placeholder="rider3"
                                onChange={(e) => setRider3(e.target.value)}
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
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image5"
                                type="text"
                                value={image5}
                                placeholder="image5"
                                onChange={(e) => setImage5(e.target.value)}
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
                            <div className="edit-team-button-group"
                                 style={{display: "flex", justifyContent: "space-evenly"}}>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal"
                                        style={{width: "200px"}}>Save Edit
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

export default EditTeam;