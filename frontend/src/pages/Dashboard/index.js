import React, { useState, useEffect } from 'react';


import { Container } from './styles';
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';

import api from '../../services/api';

function Dashboard() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('product').then(response => {
      setProducts(response.data)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Container>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <strong>Nome do produto:</strong>
                <p>{product.product_name}</p>

                <strong>ID do produto:</strong>
                <p>{product.id}</p>

                <strong>Descrição:</strong>
                <p>{product.product_description}</p>

                <strong>Valor:</strong>
                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.product_price)}</p>
                <Link to="#">Ver detalhes</Link>
            </li> 
            ))}   
          </ul>
      </Container>
    </>
      
  );
}

export default Dashboard;