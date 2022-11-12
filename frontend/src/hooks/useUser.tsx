import React, {useEffect, useState} from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import {User} from "../models/User";

function UseUser() {

    let user!: User;

    const [me, setMe] = useState<User | undefined>()
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleLogin = (username: string, password: string) => {
        axios.get("/api/user/login", {auth: {username, password}})
            .then((response) => response.data)
            .then((data) => setMe(data))
            .then(() => setisLoggedIn(true))
            .then(() => toast.success("You are logged in!"))
            .catch(() => toast.error("username or password are incorrect"))
    }

    const handleLogout = () => {
        axios.get("/api/user/logout")
            .then(() => setMe(undefined))
            .then(() => setisLoggedIn(false))
            .then(() => toast.success("You are logged out!"))
            .catch((error) => toast.error(error.message))
    }

    const handleRegister = (newUsername: string, newPassword: string) => {
        axios.post("/api/user/register", {
            username: newUsername,
            password: newPassword
        })
            .then(() => toast.success("You are now registered!"))
            .catch((error) => toast.error(error.message))
    }

    return {me, user, isLoggedIn, handleLogin, handleLogout, handleRegister};
}

export default UseUser;