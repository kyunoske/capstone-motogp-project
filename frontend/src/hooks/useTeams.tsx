import {useEffect, useState} from 'react';
import axios from "axios";
import {Team} from "../models/Team";
import {Rider} from "../models/Rider";

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
            .catch((error) => console.log(error));
    }

    const getTeamById = (id: string) => {
        axios.get(`/api/teams/${id}`)
            .then(response => response.data)
            .catch((error) => console.log(error))
    }

    const addTeam = (team: Team) => {
        axios.post("/api/teams", team)
            .then(getAllTeams)
            .catch((error) => console.log(error))
    }

    const deleteTeam = (id: string) => {
        axios.delete("/api/teams/" + id)
            .then(() => getAllTeams())
            .catch((error) => console.log(error))
    }

    const editTeam = (id: string, team: Team) => {
        axios.put(`/api/teams/${id}`, team)
            .then(getAllTeams)
            .catch((error) => console.log(error))
    }

    return {getAllTeams, addTeam, getTeamById, teams, team, deleteTeam, editTeam};
}

export default UseTeams;
