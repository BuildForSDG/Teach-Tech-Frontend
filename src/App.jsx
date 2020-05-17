import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OtherReq from './pages/OtherReq';

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
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/other-requirements" component={OtherReq} />
    </BrowserRouter>
);

export default App;
