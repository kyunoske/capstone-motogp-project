import React, {FormEvent, useState} from 'react';
import {Track} from "../models/Track";

type AddTrackModalProps = {
    track: Track;
    addTrack: (track: Track) => void;
}

function AddTrackModal(props: AddTrackModalProps) {

    const [track, setTrack] = useState(props.track)
    const [name, setName] = useState("")
    const [grandPrixName, setGrandPrixName] = useState("")
    const [round, setRound] = useState("")
    const [description, setDescription] = useState("")
    const [country, setCountry] = useState("")
    const [countryFlag, setCountryFlag] = useState("")
    const [date, setDate] = useState("")
    const [lapRecord, setLapRecord] = useState("")
    const [lapRecordHolder, setLapRecordHolder] = useState("")
    const [lap, setLap] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        let track = {
            name,
            description,
            grandPrixName,
            image,
            round,
            country,
            countryFlag,
            date,
            lapRecord,
            lapRecordHolder,
            lap,
        }

        setTrack(track);
        if (track) {
            props.addTrack(track);
        }
    }

    return (
        <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Track</h5>
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
                                placeholder="Track Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="description"
                                required={true}
                                rows={3}
                                placeholder="Track Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="grandPrixName"
                                type="text"
                                placeholder="Grand Prix Name"
                                onChange={(e) => setGrandPrixName(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image"
                                type="text"
                                placeholder="image1"
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="round"
                                type="text"
                                placeholder="Round Number"
                                onChange={(e) => setRound(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="country"
                                type="text"
                                placeholder="Country Name"
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="countryFlag"
                                type="text"
                                placeholder="Country Flag"
                                onChange={(e) => setCountryFlag(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="date"
                                type="text"
                                placeholder="date"
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="lapRecord"
                                type="text"
                                placeholder="Lap Record Time"
                                onChange={(e) => setLapRecord(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="lapRecordHolder"
                                required={true}
                                type="text"
                                placeholder="Lap Record Holder Name"
                                onChange={(e) => setLapRecordHolder(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="lap"
                                type="text"
                                placeholder="Lap Video"
                                onChange={(e) => setLap(e.target.value)}
                            />
                            <div className="button-group" style={{display: "flex", justifyContent: "space-evenly"}}>
                                <button type="submit" className="btn btn-success"
                                        style={{width: "200px"}}>Add Track
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

export default AddTrackModal;