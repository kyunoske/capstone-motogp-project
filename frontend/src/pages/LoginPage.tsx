import React, {FormEvent, useState} from 'react';
import "./LoginPage.css";
import {Link} from "react-router-dom";

type LoginPageProps = {
    handleLogin: (username: string, password: string) => void;
    handleRegister: (newUsername: string, newPassword: string) => void;
    handleLogout: () => void;
}

function LoginPage(props: LoginPageProps) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const handleLoginAndRedirect = () => {
        props.handleLogin(username, password)

        setTimeout(() => {
            window.location.href = "/#/"
        }, 1000)
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
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                    <input
                        className="form-control login-inputs"
                        type="password"
                        name="newPassword"
                        placeholder="Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button className="login-button" onClick={() => props.handleRegister(newUsername, newPassword)}>Add
                        Admin
                    </button>
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
                    <button className="login-button" onClick={
                        handleLoginAndRedirect
                    }>Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;