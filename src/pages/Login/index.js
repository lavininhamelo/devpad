import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  function handleLogin(e) {
    e.preventDefault();
    console.log(1);
    login(email, password);
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
