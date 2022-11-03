import React from 'react';
import "./TrackDetailPage.css";
import {Track} from "../models/Track";
import {useParams} from "react-router-dom";

type TrackDetailPageProps = {

    tracks: Track[];

}

function TrackDetailPage(props: TrackDetailPageProps) {

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
            <div className="track-detail-grand-prix-name">
                {track.grandPrixName}
            </div>
            <div className="track-detail-image-container">
                <img src={track.image} alt={track.image}/>
                <iframe width="951" height="535" src="https://www.youtube.com/embed/Pqg30hGwGXw"
                        title="Lorenzo's 9 year lap record broken 💥 | Tissot Pole Lap 2022 #AustralianGP"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                </iframe>
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
        </div>
    );
}

export default TrackDetailPage;