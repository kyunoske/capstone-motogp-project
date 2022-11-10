import {useEffect, useState} from 'react';
import {Rider} from "../models/Rider";
import axios from "axios";

function UseRiders() {

    let rider!: Rider;
    const [riders, setRiders] = useState([])

    useEffect(() => {
        getAllRiders()
    }, [])

    const getAllRiders = () => {
        axios.get("/api/riders")
            .then((response) => response.data)
            .then((riders) => setRiders(riders))
            .catch((error) => console.log(error));
    }

    const getRiderById = (id: string) => {
        axios.get(`/api/riders/${id}`)
            .then(response => response.data)
            .catch((error) => console.log(error))
    }

    const addRider = (rider: Rider) => {
        axios.post("/api/riders", rider)
            .then(getAllRiders)
            .catch((error) => console.log(error))
    }

    const deleteRider = (id: string) => {
        axios.delete("/api/riders/" + id)
            .then(() => getAllRiders())
            .catch((error) => console.log(error))
    }

    const editRider = (id: string, rider: Rider) => {
        axios.put(`/api/riders/${id}`, rider)
            .then(getAllRiders)
            .catch((error) => console.log(error))
    }

    return {getAllRiders, getRiderById, addRider, riders, rider, deleteRider, editRider};
}

export default UseRiders;