import React, {useEffect, useState} from 'react';
import {User} from "../models/User";
import axios from "axios";

function UseUser() {

    const [me, setMe] = useState<User | undefined>()
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleLogin = (username: string, password: string) => {
        axios.get("/api/user/login", {auth: {username, password}})
            .then((response) => response.data)
            .then((data) => setMe(data))
            .then(() => setisLoggedIn(true))
            .catch(() => alert("username or password is incorrect"))
    }

    const handleLogout = () => {
        axios.get("/api/user/logout")
            .then(() => setMe(undefined))
            .then(() => setisLoggedIn(false))
    }

    const handleRegister = (newUsername: string, newPassword: string) => {
        axios.post("/api/user/register", {
            username: newUsername,
            password: newPassword
        })
    }

    return {me, isLoggedIn, handleLogin, handleLogout, handleRegister};
}

export default UseUser;