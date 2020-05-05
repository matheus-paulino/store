import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-left: 210px;
`;

export const ContainerProduct = styled.div`
    max-width: 500px;
    width: 100%;
    background: rgb(255, 255, 255);
    margin: 20px auto;
    padding: 30px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.125);

    h2 {
        margin-bottom: 25px;
        color: #002147;
        text-transform: uppercase;
        text-align: center;
    }
`;

export const Form = styled.div`
    width: 100%;

    div {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
    }

    div label {
        width: 200px;
        color: #757575;
        margin-right: 10px;
    }

    div input, textarea {
        width: 100%;
        outline: none;
        border: 1px solid #d5dbd9;
        font-size: 15px;
        padding: 8px 10px;
        transition: all 0.3s ease;
    }

    div textarea {
        resize: vertical;
        height: 125px;
    }

    div input:focus, textarea:focus {
        border: 1px solid #007BFF;
    }

    div input[type=submit] {
        padding: 8px 10px;
        font-size: 15px;
        border: 0;
        background: #007BFF;
        color: #fff;
        cursor: pointer;
        border-radius: 3px;
        outline: none;
        transition: all 0.3s ease;
    }

    div input[type=submit]:hover {
        opacity: 0.9;
    }

    div:last-child {
        margin-bottom: 0;
    }
`;
