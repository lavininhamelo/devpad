import React from 'react';
import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header name="Minha Pagina Pricipal" />
      <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
