import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container, FormContainer, ImageContainer, Link } from './style';
import Logo from '../../assets/Logo.png';
import SVG from '../../assets/login.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  function handleLogin(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <Container>
      <ImageContainer>
        <h2>Acesse de qualquer lugar!</h2>
        <p>
          Você pode acessar suas anotações de qualquer lugar e a qualquer
          momento.
        </p>
        <img src={SVG} alt="Fazer login - DevPad" />
      </ImageContainer>

      <FormContainer>
        <img src={Logo} alt="Logo DevPad" />
        <h1>Fazer login</h1>
        <p>
          Bem vindo! Se autentifique no sistema para criar e acessar suas notas.
        </p>
        <form onSubmit={handleLogin}>
          <Input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={faEnvelope}
            placeholder="E-mail"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            icon={faLock}
          />
          <Button type="submit">Fazer login</Button>
          <span>
            Não possui uma conta?{'  '}
            <Link style={{ textDecoration: 'none' }} to={'/register'}>
              Criar conta
            </Link>
          </span>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Login;
