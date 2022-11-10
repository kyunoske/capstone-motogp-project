import React, {FormEvent, useState} from 'react';
import {Team} from "../../models/Team";

type AddTeamModalProps = {
    team: Team;
    addTeam: (team: Team) => void;
}

function AddTeamModal(props: AddTeamModalProps) {

    const [team, setTeam] = useState(props.team)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [logo, setLogo] = useState("")
    const [rider1, setRider1] = useState("")
    const [rider2, setRider2] = useState("")
    const [rider3, setRider3] = useState("")
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image4, setImage4] = useState("")
    const [image5, setImage5] = useState("")
    const [wins, setWins] = useState("")
    const [championships, setChampionships] = useState("")

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let team = {
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

        setTeam(team);
        if (team) {
            props.addTeam(team);
        }

    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Team</h5>
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
                                placeholder="Team Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="description"
                                required={true}
                                rows={3}
                                placeholder="Team Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="logo"
                                type="text"
                                placeholder="Team Logo"
                                onChange={(e) => setLogo(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="rider1"
                                type="text"
                                placeholder="rider1"
                                onChange={(e) => setRider1(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="rider2"
                                type="text"
                                placeholder="rider2"
                                onChange={(e) => setRider2(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="rider3"
                                type="text"
                                placeholder="rider3"
                                onChange={(e) => setRider3(e.target.value)}
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
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image5"
                                type="text"
                                placeholder="image5"
                                onChange={(e) => setImage5(e.target.value)}
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
                            <div className="button-group" style={{display: "flex", justifyContent: "space-evenly"}}>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal"
                                        style={{width: "200px"}}>Add Team
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

export default AddTeamModal;

