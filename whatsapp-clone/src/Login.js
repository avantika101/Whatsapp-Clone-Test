import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";

function Login() {
    const signIn = () => {};
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__text">
                    <h1>Sign In To Whatsapp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    );
}

export default Login;