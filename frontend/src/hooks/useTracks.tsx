import {useEffect, useState} from 'react';
import {Track} from "../models/Track";
import axios from "axios";
import {Article} from "../models/Article";
import toast from "react-hot-toast";

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
            .catch((error) => toast.error(error.message))
    }

    const getTrackById = (id: string) => {
        axios.get(`/api/tracks/${id}`)
            .then(response => response.data)
            .catch((error) => toast.error(error.message))
    }

    const addTrack = (track: Track) => {
        axios.post("/api/tracks", track)
            .then(getAllTracks)
            .then(() => toast.success("A new track has been added!"))
            .catch((error) => toast.error(error.message))
    }

    const deleteTrack = (id: string) => {
        axios.delete("/api/tracks/" + id)
            .then(() => getAllTracks())
            .then(() => toast.success("Track has been deleted!"))
            .catch((error) => toast.error(error.message))
    }

    const editTrack = (id: string, track: Track) => {
        axios.put(`/api/tracks/${id}`, track)
            .then(getAllTracks)
            .then(() => toast.success("Track has been edited!"))
            .catch((error) => toast.error(error.message))
    }


    return {getAllTracks, getTrackById, addTrack, tracks, track, deleteTrack, editTrack};
}

export default UseTracks;