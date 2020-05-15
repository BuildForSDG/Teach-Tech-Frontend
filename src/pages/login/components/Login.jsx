import React from 'react';
import { LogSignWrapper } from './style';

const Login = () => (
    <LogSignWrapper>
        <h1>Log into your account </h1>
        <form>
            <label>
                Email
                <br />
                <input type="email" maxLength="50" size="40" autoComplete="on" required />
            </label>

            <label>
                Password
                <br />
                <input type="password" maxLength="50" size="40" autoComplete="off" required />
            </label>
            <button type="submit">
                Sign in
            </button>
        </form>
    </LogSignWrapper>
);

export default Login;
