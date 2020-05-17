import React from 'react';
import styled from 'styled-components';

const HeaderNavS = styled.nav`
    border-top: 15px solid #000;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    height: 100px;
    div{
        cursor: pointer;
    }
`;

const HeaderNav = () => (
    <HeaderNavS>
        <div>
            <h2>Teach Tech</h2>
        </div>

        <div>
            <h4>Logout</h4>
        </div>
    </HeaderNavS>
);

export default HeaderNav;
