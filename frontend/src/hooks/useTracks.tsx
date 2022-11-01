import {useEffect, useState} from 'react';
import {Track} from "../models/Track";
import axios from "axios";

function UseTracks() {

    let track!: Track;
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        getAllTracks()
    }, [])

    const getAllTracks = () => {
        axios.get("/api/tracks")
            .then((response) => response.data)
            .then((tracks) => setTracks(tracks))
            .catch((error) => console.log(error));
    }

    const getTrackById = (id: string) => {
        axios.get(`/api/tracks/${id}`)
            .then(response => response.data);
    }

    const addTrack = (track: Track) => {
        axios.post("/api/tracks", track)
            .then(getAllTracks);
    }

    return {getAllTracks, getTrackById, addTrack, tracks, track};
}

export default UseTracks;