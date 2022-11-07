import React, {useEffect, useState} from 'react';
import {User} from "../models/User";
import axios from "axios";

function UseUser() {

    let user!: User;
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [me, setMe] = useState("")

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = () => {
        axios.get("/api/users")
            .then((response) => response.data)
            .then((users) => setUsers(users))
            .catch((error) => console.log(error));
    }

    const getUserById = (id: string) => {
        axios.get(`/api/users/${id}`)
            .then(response => response.data);
    }

    const handleLogin = () => {
        axios.get("/api/users/login", {auth: {username, password}})
            .then((response) => response.data)
            .then((data) => setMe(data))
            .then(() => setUsername(""))
            .then(() => setPassword(""))
            .catch(() => alert("username or password is incorrect"))
    }

    const handleLogout = () => {
        axios.get("/api/users/logout")
            .then(() => setMe(""))
    }

    const handleRegister = () => {
        axios.post("/api/user/register", {
            username: newUsername,
            password: newPassword
        })
            .then(() => setNewUsername(""))
            .then(() => setNewPassword(""))
    }

    return {user, users, getAllUsers, getUserById, handleLogin, handleLogout, handleRegister};
}

export default UseUser;