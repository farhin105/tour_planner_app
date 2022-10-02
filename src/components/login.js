import React, { useState } from "react";

import "./login.css";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();

    const [errorMessage, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    // correct crredntials for login
    const correctCredentials = {
        username: "Test",
        password: "test1234"
    };

    const renderErrorMessage = () =>
        <div className="error">{errorMessage}</div>;


    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if username is correct
        const userExists = correctCredentials.username === username;

        // if username is correct then check password
        if (userExists) {
            if (correctCredentials.password === password) {
                setLoggedIn(true);
            } else {
                // incorrect password
                setErrorMessage("Password is not correct");
            }
        }
        else {
            // incorrect username
            setErrorMessage("Username is not correct");
        }
    };

    const loginForm = (
        <div >
            <form onSubmit={handleSubmit}>
                {renderErrorMessage()}
                <div className="input-container">
                    <input type="text" name="username" required 
                    placeholder="username" onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="input-container">
                    <input type="password" name="password" required 
                    placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="input-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <>
            <div className="login-form">
                <div className="title">Login</div>
                {loggedIn ? <div>logged in</div> : loginForm}
            </div>
        </>
    );
}

export default Login;