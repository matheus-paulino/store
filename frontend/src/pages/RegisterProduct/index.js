import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import { Container, ContainerProduct, Form } from './styles';

import api from '../../services/api';

import Navbar from '../../components/Navbar';

function Dashboard() {
  const [product_name, setNameProduct] = useState('');
  const [product_description, setDescriptionProduct] = useState('');
  const [product_price, setPriceProduct] = useState('');

  const history = useHistory();

  async function handleRegisterNewProduct(e) {
    e.preventDefault() // removendo o comportamento padrão do form

    const productData = {
      product_name,
      product_description,
      product_price
    };
    try {
      await api.post('/product', productData)

      history.push('/dashboard')
    } catch (error) {
      alert(`Erro no cadastro.`)
    }
  }

  return (
      <>
        <Navbar />
        <Container>
          <ContainerProduct>
            <h2>Cadastrar novo produto</h2>

            <Form onSubmit={handleRegisterNewProduct}>
              <div>
                <label>Nome do produto</label>
                <input 
                type="text" 
                value={product_name}
                onChange={e => setNameProduct(e.target.value)}
                />
              </div>

              <div>
                <label>Descrição do produto</label>
                <textarea 
                type="text"
                value={product_description}
                onChange={e => setDescriptionProduct(e.target.value)} 
                />
              </div>

              <div>
                <label>Preço do produto</label>
                <input 
                type="text" 
                value={product_price}
                onChange={e => setPriceProduct(e.target.value)}
                />
              </div>

              <div>
                <input type="submit" value="Registar produto" />
              </div>
            </Form>
          </ContainerProduct>
        </Container>
      </>
)};

export default Dashboard;