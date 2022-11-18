import {useEffect, useState} from 'react';
import {Rider} from "../models/Rider";
import axios from "axios";
import toast from "react-hot-toast";

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
            .catch((error) => toast.error(error.message));
    }

    const getRiderById = (id: string) => {
        axios.get(`/api/riders/${id}`)
            .then(response => response.data)
            .catch((error) => toast.error(error.message))
    }

    const addRider = (rider: Rider) => {
        axios.post("/api/riders", rider)
            .then(getAllRiders)
            .then(() => toast.success("A new rider has been added!"))
            .catch((error) => toast.error(error.message))
    }

    const deleteRider = (id: string) => {
        axios.delete("/api/riders/" + id)
            .then(() => getAllRiders())
            .then(() => toast.success("Rider has been deleted!"))
            .catch((error) => toast.error(error.message))
    }

    const editRider = (id: string, rider: Rider) => {
        axios.put(`/api/riders/${id}`, rider)
            .then(getAllRiders)
            .then(() => toast.success("Rider has been edited!"))
            .catch((error) => toast.error(error.message))
    }

    return {getAllRiders, getRiderById, addRider, riders, rider, deleteRider, editRider};
}

export default UseRiders;