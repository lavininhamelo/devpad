import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Link } from './style';
import Logo from '../../assets/Logo.png';

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
          icon={faUserAlt}
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
          Não possui uma conta?{' '}
          <Link style={{ textDecoration: 'none' }} to={'/register'}>
            Criar conta
          </Link>
        </span>
      </form>
    </Container>
  );
}

export default Login;
