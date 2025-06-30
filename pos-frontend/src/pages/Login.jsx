// Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsername = (event) => {
        setUsername(event.target.value);
    };

    const changePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Checks if username and password are correct.
        if (username === 'admin' && password === 'admin') {
            navigate('/admin/panel');
        } else {
            alert('Incorrect username or password.')
        }
    };

    return (
        <div id="login-container">
            <div id="login">
            <form method="GET" id="loginform" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="username">User:</label>
                <input
                    type="text"
                    onChange={changeUsername}
                    value={username}
                    name="username"
                    id="username"
                />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    onChange={changePassword}
                    value={password}
                    name="password"
                    id="password"
                />
                </div>
                <button type="submit">Log in</button>
            </form>
            </div>
        </div>
    );
};

export default Login;