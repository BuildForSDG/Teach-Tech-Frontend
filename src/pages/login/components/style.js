import styled from 'styled-components';
import bgImage from '../../../assets/ls_bg.jpg';

export const LogSignWrapper = styled.div`
    color: white;
    width: 100%;
    height: 100vh;
    background-image: url(${bgImage});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        form {
            width: 700px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            input{
                border: none;
                margin-bottom: 30px;
                margin-top: 5px;
                height: 35px;
                border-radius: 5px;
                padding: 0 5px;
            }
            button{
                background-color: black;
                color: white;
                width: 100px;
                height: 35px;
                border-radius: 5px;
                border: 1px solid white;
                cursor: pointer;
                
            }
            @media(max-width: 576px){
                width: 95%;
             }
        }
`;
