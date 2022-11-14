import React from 'react';
import "../track/TrackDetailPage.css";
import ReactPlayer from "react-player/youtube";
import {Track} from "../../models/Track";
import {Link, useParams} from "react-router-dom";
import EditTrack from "../../components/track/EditTrack";
import DeleteTrack from "../../components/track/DeleteTrack";

type AdminTrackDetailPageProps = {
    track: Track;
    tracks: Track[];
    editTrack: (id: string, track: Track) => void;
    deleteTrack: (id: string) => void;
}

function AdminTrackDetailPage(props: AdminTrackDetailPageProps) {

    const params = useParams();
    const id = params.id;

    if (id === undefined) {
        return (<>Track not found with this id!</>)
    }

    const track = props.tracks.find((track) => track.id === id)
    console.log(track)

    if (track === undefined) {
        return (<>Sorry no track found!</>)
    }

    return (
        <div className="track-detail-container">
            <Link to={"/admin/homepage"} className="link-to-homepage">
                <button className="btn button-add back-to-homepage-rider">Back to Admin Tracks
                </button>
            </Link>
            <div className="track-detail-grand-prix-name">
                {track.grandPrixName}
            </div>
            <div className="track-detail-image-video-container">
                <div className="track-detail-image-container">
                    <img src={track.image} alt={track.image} className="track-detail-image"/>
                </div>
                <div className="track-detai-video">
                    <ReactPlayer url={track.lap}
                                 width="100%"
                                 height="100%"
                                 playing={true}
                                 controls={true}
                                 muted={true}
                    />
                </div>
            </div>
            <div className="track-detail-info-container">
                <div className="track-detail-info-left">
                    <div className="track-detail-info-round">Round: {track.round}</div>
                    <div className="track-detail-info-date">Date: {track.date}</div>
                    <div className="track-detail-info-name">Name: {track.name}</div>
                    <div className="track-detail-info-country-flag">{track.country}&nbsp;
                        <img src={track.countryFlag} alt={track.countryFlag} className="track-detail-flag"/>
                    </div>
                </div>
                <div className="track-detail-info-right">
                    <div className="track-detail-lap-record-title">{track.name} MotoGP Lap Record</div>
                    <div className="track-detail-lap-record-time">{track.lapRecord}</div>
                    <div className="track-detail-lap-record-holder-title">Lap Record Holder</div>
                    <div className="track-detail-lap-record-holder-name">{track.lapRecordHolder}</div>
                </div>
            </div>
            <div className="track-info-description-container">
                <div className="about-track">About {track.name}</div>
                <div className="track-info-description">{track.description}</div>
            </div>
            <div className="track-modal-button-group">
                <EditTrack track={props.track} tracks={props.tracks} editTrack={props.editTrack}/>
                <button type="button"
                        className="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal11"
                        style={{
                            width: "30%",
                            justifyContent: "center",
                        }}
                >
                    Edit Track
                </button>
                <DeleteTrack track={props.track} tracks={props.tracks} deleteTrack={props.deleteTrack}/>
                <button
                    className="btn me-md-2 btn-outline-danger"
                    style={{
                        width: "30%",
                        justifyContent: "center",
                    }}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal12"
                >Delete
                </button>
            </div>
        </div>
    );
}

export default AdminTrackDetailPage;