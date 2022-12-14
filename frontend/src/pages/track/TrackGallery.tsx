import React, {useState} from 'react';
import "./TrackGallery.css";
import {Track} from "../../models/Track";
import TrackCard from "../../components/track/TrackCard";
import {Link} from "react-router-dom";

type TrackGalleryProps = {
    tracks: Track[];
    isLoggedIn: boolean;
}

function TrackGallery(props: TrackGalleryProps) {

    const [data, setData] = useState("");
    const sorting = [...props.tracks].sort((a, b) => +a.round > +b.round ? 1 : -1)
    const filteredTracks = sorting.filter((track) => track.name.toLowerCase().includes(data));

    return (
        <div>
            <div className="track-input-container">
                <Link to={"/"} className="link-to-themes">
                    <button className="btn button-add back-to-themes-track">Back to Themes
                    </button>
                </Link>
                <div className="input-group input-group-sm mb-3" style={{width: "50%"}}>
                    <input style={{width: "80%", borderRadius: "5px"}} type="text" placeholder="Find a track..."
                           onChange={(event) => setData(event.target.value)}/>
                </div>
            </div>

            <div className="track-gallery-mapped-cards">
                {filteredTracks.map((track, index) =>
                    <TrackCard track={track} key={index} isLoggedIn={props.isLoggedIn}/>
                )}
            </div>
        </div>
    );
}

export default TrackGallery;