import React from 'react';
import { LogSignWrapper } from '../../Login/components/style';

const Signup = () => (
    <LogSignWrapper>
        <h1>Create Your Account </h1>
        <form>
            <label>
                Firstname
                <br />
                <input type="text" maxLength="50" size="20" autoComplete="on" required />
            </label>

            <label>
                Lastname
                <br />
                <input type="text" maxLength="50" size="20" autoComplete="on" required />
            </label>

            <label>
                Email
                <br />
                <input type="email" maxLength="50" size="40" autoComplete="on" required />
            </label>

            <label>
                Phone number
                <br />
                <input type="text" maxLength="50" size="40" autoComplete="on" required />
            </label>

            <label>
                Password
                <br />
                <input type="password" maxLength="50" size="40" autoComplete="off" required />
            </label>

            <button type="submit">
                Register
            </button>
            <p>Already have account? Sign in</p>
        </form>
    </LogSignWrapper>
);

export default Signup;
