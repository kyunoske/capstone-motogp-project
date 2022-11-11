import React, {FormEvent, useState} from 'react';
import {Track} from "../../models/Track";
import {useParams} from "react-router-dom";

type EditTrackProps = {
    track: Track;
    tracks: Track[];
    editTrack: (id: string, track: Track) => void;
}

function EditTrack(props: EditTrackProps) {

    const params = useParams();
    const id = params.id;

    const findTrack = props.tracks.find((track) => track.id === id);

    const [track, setTrack] = useState(findTrack)
    const [name, setName] = useState(findTrack ? findTrack.name : "")
    const [grandPrixName, setGrandPrixName] = useState(findTrack ? findTrack.grandPrixName : "")
    const [round, setRound] = useState(findTrack ? findTrack.round : "")
    const [description, setDescription] = useState(findTrack ? findTrack.description : "")
    const [country, setCountry] = useState(findTrack ? findTrack.country : "")
    const [countryFlag, setCountryFlag] = useState(findTrack ? findTrack.countryFlag : "")
    const [date, setDate] = useState(findTrack ? findTrack.date : "")
    const [lapRecord, setLapRecord] = useState(findTrack ? findTrack.lapRecord : "")
    const [lapRecordHolder, setLapRecordHolder] = useState(findTrack ? findTrack.lapRecordHolder : "")
    const [lap, setLap] = useState(findTrack ? findTrack.lap : "")
    const [image, setImage] = useState(findTrack ? findTrack.image : "")

    if (id === undefined) {
        return (<>Track not found with this id!</>)
    }

    if (findTrack === undefined) {
        return (<>Sorry no track found!</>)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        let updatedTrack = {
            id,
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

        setTrack(updatedTrack);

        props.editTrack(id, updatedTrack);
    }

    return (
        <div className="modal fade" id="exampleModal11" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Track</h5>
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
                                placeholder="Track Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="description"
                                required={true}
                                rows={3}
                                value={description}
                                placeholder="Track Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="grandPrixName"
                                type="text"
                                value={grandPrixName}
                                placeholder="Grand Prix Name"
                                onChange={(e) => setGrandPrixName(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image"
                                type="text"
                                value={image}
                                placeholder="image1"
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="round"
                                type="text"
                                value={round}
                                placeholder="Round Number"
                                onChange={(e) => setRound(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="country"
                                type="text"
                                value={country}
                                placeholder="Country Name"
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="countryFlag"
                                type="text"
                                value={countryFlag}
                                placeholder="Country Flag"
                                onChange={(e) => setCountryFlag(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="date"
                                type="text"
                                value={date}
                                placeholder="date"
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="lapRecord"
                                type="text"
                                value={lapRecord}
                                placeholder="Lap Record Time"
                                onChange={(e) => setLapRecord(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="lapRecordHolder"
                                required={true}
                                type="text"
                                value={lapRecord}
                                placeholder="Lap Record Holder Name"
                                onChange={(e) => setLapRecordHolder(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="lap"
                                type="text"
                                value={lap}
                                placeholder="Lap Video"
                                onChange={(e) => setLap(e.target.value)}
                            />
                            <div className="button-group-edit-track"
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

export default EditTrack;