import React, {useState} from 'react';
import "./RiderGallery.css";
import {Rider} from "../models/Rider";
import RiderCard from "../components/RiderCard";
import {Team} from "../models/Team";

type RiderGalleryProps = {
    riders: Rider[];
    team: Team;
}

function RiderGallery(props: RiderGalleryProps) {
    const [data, setData] = useState("");
    const sorting = [...props.riders].sort((a, b) => +a.bikeNumber > +b.bikeNumber ? 1 : -1)
    const filteredRiders = sorting.filter((rider) => rider.firstName.toLowerCase().includes(data));

    return (
        <div>
            <div className="rider-input-container">
                <div className="input-group input-group-sm mb-3">
                    <input style={{width: "80%", borderRadius: "5px"}} type="text" placeholder="Find a rider..."
                           onChange={(event) => setData(event.target.value)}/>
                </div>
            </div>

            <div style={{display: "flex", flexWrap: "wrap", margin: "auto"}}>
                {filteredRiders.map((rider, index) =>
                    <RiderCard rider={rider} key={index}/>
                )}
            </div>
        </div>
    );
}

export default RiderGallery;