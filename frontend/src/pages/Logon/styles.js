import styled from 'styled-components';

export const Container = styled.div`
    width: 450px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogonForm = styled.form`
    background: #fff;
    padding: 40px;
    width: 100%;
    height: 300px;


    div input {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 25px;
        border: 2px solid #e9eaea;
        color: #3e3e40;
        font-size: 14px;
        outline: none;
        transition: all 0.3s ease;
    }

    div input:focus {
        border: 2px solid #007BFF;
    }
    

    a {
        text-decoration: none;
        padding: 20px;
        background: #34b3a0;
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
        cursor: pointer;    
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
