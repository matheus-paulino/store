import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    width: 200px;
    height: 100%;
    background: #181818;
    padding: 30px 0;

    h2 {
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 35px;
    }

    ul {
        list-style: none;
    }

    ul li {
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        border-top: 1px solid rgba(225,225,225,0.05);
    }

    ul li a {
        color: rgb(255, 255, 255);
        display: block;
        text-align: center;
        text-decoration: none;
        font-weight: 500;
    }

    ul li:hover {
        background: #000000;
    }
`;
