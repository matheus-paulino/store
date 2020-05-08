import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        display: flex;
        position: relative;
    }

    body {
        background: rgb(255, 250, 250);
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }
`;
