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
            .then(response => response.data);
    }

    const addRider = (rider: Rider) => {
        axios.post("/api/riders", rider)
            .then(getAllRiders)
    }

    return {getAllRiders, getRiderById, addRider, riders, rider};
}

export default UseRiders;