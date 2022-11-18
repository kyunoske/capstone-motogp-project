import React, {useState} from 'react';
import "./RiderGallery.css";
import {Rider} from "../../models/Rider";
import RiderCard from "../../components/rider/RiderCard";
import {Link} from "react-router-dom";

type RiderGalleryProps = {
    riders: Rider[];
    isLoggedIn: boolean;
}

function RiderGallery(props: RiderGalleryProps) {
    const [data, setData] = useState("");
    const sorting = [...props.riders].sort((a, b) => +a.bikeNumber > +b.bikeNumber ? 1 : -1)
    const filteredRiders = sorting.filter((rider) => rider.firstName.toLowerCase().includes(data));

    return (
        <div>
            <div className="rider-input-container">
                <Link to={"/"} className="link-to-themes">
                    <button className="btn button-add back-to-themes-rider">Back to Themes
                    </button>
                </Link>
                <div className="input-group input-group-sm mb-3" style={{width: "50%"}}>
                    <input style={{width: "80%", borderRadius: "5px"}} type="text" placeholder="Find a rider..."
                           onChange={(event) => setData(event.target.value)}/>
                </div>
            </div>

            <div className="rider-gallery-mapped-cards">
                {filteredRiders.map((rider, index) =>
                    <RiderCard rider={rider} key={index} isLoggedIn={props.isLoggedIn}/>
                )}
            </div>
        </div>
    );
}

export default RiderGallery;