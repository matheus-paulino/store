import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-left: 210px;
    margin-top: 10px;
    margin-right: 10px;

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 24px;
        list-style: none;
    }

    ul li {
        background: #FFF;
        padding: 24px;
        border-radius: 8px;
        position: relative;
    }

    ul li strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
    }

    ul li strong:not(:first-child) {
        margin-top: 32px;
    }

    ul li p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
    }
    
    ul li a {
        background: #7159c1;
        float: right;
        padding: 8px;
        border-radius: 8px;
        color: #fff;
        transition: 0.2s ease-in-out all;
    }

    ul li a:hover {
        opacity: 0.8;
    }
`;
