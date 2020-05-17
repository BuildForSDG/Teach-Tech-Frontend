import styled from 'styled-components';

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LowerNav = styled.nav`
    display: flex;
    color: white;
    margin: 10px auto 20px;
        div{
            cursor: pointer;
            width: 250px;
            height: 40px;
            display: flex;
            align-items: center;
            box-shadow: 0px 2px 5px grey;
            h5{
                margin-left: 20px;
            }
            img{
                height: 100%;
            }
            &:nth-of-type(1) {
                background: #afaaaa;
            }
            &:nth-of-type(2) {
                background: #817b7b;
            }
            &:nth-of-type(3) {
                background: #855c5c;
            }
            &:nth-of-type(4) {
                box-shadow: none;
                width: auto;
            }
        }
`;

const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .info{
        color: #afaaaa;
        font-size: smaller;
    }
    .service-convict{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .serial{
                border: 1px solid grey;
                height: 35px;
                padding: 0 5px;
        }
        .serial2{
            opacity: 0;
            pointer-events: none;
    }
    }
    textarea{
        margin-top: 20px;
        padding-left: 5px;
        padding-top: 5px;
    }
    .upload{
        margin-top: 20px;
        input::-webkit-file-upload-button{
            visibility: hidden;
        }
        input::before{
            content: 'Upload files';
            color: black;
            display: inline-block;
            background: #e8e8e9;
            border: 1px solid #999;
            border-radius: 3px;
            padding: 5px 8px;
            // outline: none;
            white-space: nowrap;
            -webkit-user-select: none;
            cursor: pointer;
            text-shadow: 1px 1px #fff;
            font-weight: 700;
            font-size: 10pt;
        }
    }
    .submit{
        background-color: #402d21;
        color: white;
        width: 100px;
        height: 35px;
        border: 1px solid grey;
        cursor: pointer;
        margin: 30px auto 0 auto;
    }
`;

export {
    BodyWrapper,
    LowerNav,
    MainForm
};
