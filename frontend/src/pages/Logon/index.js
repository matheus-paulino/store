import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, LogonForm } from './styles';

import api from '../../services/api';

export default function Logon() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post()
    } catch (err) {
      
    }
  }

  return (
  <Container>
      <LogonForm>
          <div>
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
          </div>
          
          <Link to="/dashboard">Entrar</Link>
      </LogonForm>
  </Container>
)};