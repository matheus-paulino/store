import React from 'react';

import { Container, ContainerProduct, Form } from './styles';

import Navbar from '../../components/Navbar';

function Dashboard() {
  return (
      <>
        <Navbar />
        <Container>
          <ContainerProduct>
            <h2>Cadastrar novo produto</h2>

            <Form>
              <div>
                <label>Nome do produto</label>
                <input type="text" />
              </div>

              <div>
                <label>Descrição do produto</label>
                <textarea type="text" />
              </div>

              <div>
                <label>Preço do produto</label>
                <input type="text" />
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