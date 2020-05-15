import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Signup from './pages/Signup';

// toast for notification
toast.configure(
    {
        autoClose: 5000,
        closeOnClick: false,
        draggable: true,
        hideProgressBar: false,
        newestOnTop: true,
        pauseOnHover: true,
        pauseOnVisibilityChange: true,
        position: 'top-center',
        rtl: false,
    }
);

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Montserrat', sans-serif !important
}
`;

const App = () => (
    <BrowserRouter>
        <GlobalStyle />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
    </BrowserRouter>
);

export default App;
