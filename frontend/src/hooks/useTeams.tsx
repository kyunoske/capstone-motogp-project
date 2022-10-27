import {useEffect, useState} from 'react';
import axios from "axios";
import {Team} from "../models/Team";

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

    const addTeam = (team: Team) => {
        axios.post("/api/teams", team)
            .then(getAllTeams)
    }

    const getTeamById = (id: string) => {
        axios.get(`/api/teams/${id}`)
            .then(response => response.data);
    }
    return {getAllTeams, addTeam, getTeamById, teams, team};
}

export default UseTeams;