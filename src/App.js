import React from 'react';
import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header name="Minha Pagina Pricipal" />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
