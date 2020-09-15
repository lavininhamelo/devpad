import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  faLock,
  faUserAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { Container, FormContainer, ImageContainer, Link } from './style';
import Logo from '../../assets/Logo.png';
import SVG from '../../assets/register.svg';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { register } = useAuth();

  function handleRegister(e) {
    e.preventDefault();
    register(email, username, password);
  }

  return (
    <Container>
      <FormContainer>
        <img src={Logo} alt="Logo DevPad" />
        <h1>Registrar-se</h1>
        <p>Prencha todas as informações para se cadastrar no sistema!</p>
        <form onSubmit={handleRegister}>
          <Input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={faEnvelope}
            placeholder="E-mail"
          />
          <Input
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            icon={faUserAlt}
            placeholder="Usuário"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            icon={faLock}
          />
          <Button type="submit">Criar conta</Button>
          <span>
            Já possui uma conta?{' '}
            <Link style={{ textDecoration: 'none' }} to={'/'}>
              Fazer login
            </Link>
          </span>
        </form>
      </FormContainer>

      <ImageContainer>
        <img src={SVG} alt="Registrar-se - DevPad" />
        <h2>Deixe o DevPad lembrar por você!</h2>
        <p>
          Nunca mais perca conteúdos, ideias ou links interessantes, salve tudo
          e recupere quando você quiser.
        </p>
      </ImageContainer>
    </Container>
  );
}

export default Register;
