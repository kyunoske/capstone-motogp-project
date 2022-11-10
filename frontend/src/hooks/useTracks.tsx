import {useEffect, useState} from 'react';
import {Track} from "../models/Track";
import axios from "axios";
import {Article} from "../models/Article";

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

    const deleteTrack = (id: string) => {
        axios.delete("/api/tracks/" + id)
            .then(() => getAllTracks())
            .catch((error) => console.log(error))
    }

    const editTrack = (id: string, track: Track) => {
        axios.put(`/api/tracks/${id}`, track)
            .then(getAllTracks)
            .catch((error) => console.log(error))
    }


    return {getAllTracks, getTrackById, addTrack, tracks, track, deleteTrack, editTrack};
}

export default UseTracks;