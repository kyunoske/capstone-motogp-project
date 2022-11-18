import {useEffect, useState} from 'react';
import axios from "axios";
import {Team} from "../models/Team";
import toast from "react-hot-toast";

function UseTeams() {

    let team!: Team;
    const [teams, setTeams] = useState([])

    useEffect(() => {
        getAllTeams()
    }, [])

    const getAllTeams = () => {
        axios.get("/api/teams")
            .then((response) => response.data)
            .then((teams) => setTeams(teams))
            .catch((error) => toast.error(error.message))
    }

    const getTeamById = (id: string) => {
        axios.get(`/api/teams/${id}`)
            .then(response => response.data)
            .catch((error) => toast.error(error.message))
    }

    const addTeam = (team: Team) => {
        axios.post("/api/teams", team)
            .then(getAllTeams)
            .then(() => toast.success("A new team has been added!"))
            .catch((error) => toast.error(error.message))
    }

    const deleteTeam = (id: string) => {
        axios.delete("/api/teams/" + id)
            .then(() => getAllTeams())
            .then(() => toast.success("Team has been deleted!"))
            .catch((error) => toast.error(error.message))
    }

    const editTeam = (id: string, team: Team) => {
        axios.put(`/api/teams/${id}`, team)
            .then(getAllTeams)
            .then(() => toast.success("Team has been edited!"))
            .catch((error) => toast.error(error.message))
    }

    return {getAllTeams, addTeam, getTeamById, teams, team, deleteTeam, editTeam};
}

export default UseTeams;
