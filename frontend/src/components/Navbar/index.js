import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Navbar() {
  return (
    <Container>
        <h2>Store</h2>

        <ul>
            <li>
                <Link to="/dashboard">Início</Link>
            </li>
            <li>
                <Link to="/product/new">Registrar novo produto</Link>
            </li>
        </ul>
    </Container>
  )};

export default Navbar;