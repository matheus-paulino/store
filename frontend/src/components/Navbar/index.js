import React from 'react';

import { Container } from './styles';

function Navbar() {
  return (
    <Container>
        <h2>Store</h2>

        <ul>
            <li>
                <a href="#">Início</a>
            </li>
            <li>
                <a href="#">Produtos</a>
            </li>
        </ul>
    </Container>
  )};

export default Navbar;