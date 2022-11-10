import React, {FormEvent, useState} from 'react';
import "./LoginPage.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type LoginPageProps = {}

function LoginPage(props: LoginPageProps) {

    let navigate = useNavigate();

    const adminRouteChange = () => {
        let path = `/admin/homepage`;
        navigate(path);
    }

    const routeChange = () => {
        let path = `/homepage`;
        navigate(path);
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [roles, setRoles] = useState([])
    const [me, setMe] = useState("")

    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")

    function handleLogin() {
        axios.get("/api/user/login", {auth: {username, password}})
            .then(response => response.data)
            .then((data) => setMe(data))
            .then(() => setUsername(""))
            .then(() => setPassword(""))
            .catch(() => alert("username or password or is wrong."))

        adminRouteChange();
    }

    function handleLogout() {
        axios.get("/api/user/logout")
            .then(() => setMe(""))

        routeChange()
    }

    function handleRegister() {
        axios.post("/api/user/register", {
            username: newUsername,
            password: newPassword
        })
            .then(() => setNewUsername(""))
            .then(() => setNewPassword(""))
    }

    return (
        <div className="login-container">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true"/>

                <div className="signup">
                    <label htmlFor="chk" aria-hidden="true">Add Admin</label>
                    <input
                        className="form-control login-inputs"
                        type="text"
                        name="newUsername"
                        placeholder="User name"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                    <input
                        className="form-control login-inputs"
                        type="password"
                        name="newPassword"
                        placeholder="Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button className="login-button" onClick={handleRegister}>Add Admin</button>
                    <button className="login-button logout-button" onClick={handleLogout}>Logout</button>
                </div>

                <div className="login">
                    <label htmlFor="chk" aria-hidden="true">Login Admin</label>
                    <input
                        className="form-control login-inputs"
                        type="text"
                        name="username"
                        placeholder="User name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="form-control login-inputs"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-button" onClick={handleLogin}>Login</button>
                    <button className="login-button logout-button" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;