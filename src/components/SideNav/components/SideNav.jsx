import React from 'react';
import styled from 'styled-components';

const SideNavS = styled.aside`
padding-top: 10px;
position: fixed;
bottom: 0;
height: calc(100vh - 100px);
width: 200px;
background: #402d21;
display: flex;
flex-direction: column;
justify-content: top;
align-items: center;
color: white;
font-size: smaller;
.profile{
    height: 100px;
    width: 100px;
    background: white;
    border-radius: 50%;
}

p{
    width: 100%;
    background: #453327;
    text-align: center;
    padding: 8px 10px;
    cursor: pointer;
}
`;

const SideNav = () => (
    <SideNavS>
        <div className="profile" />
        <h3>Name</h3>
        <p>My profile</p>
        <p>Work in my area</p>
        <p>Teaching in my area</p>
        <p>Subject material</p>
        <p>Available agencies</p>
    </SideNavS>
);

export default SideNav;
