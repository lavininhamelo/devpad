import React from 'react';
import { Nav } from './style.js';
import Logo from './assets/logo.svg';

export default () => {
  return (
    <>
      <Nav>
        <img src={Logo} alt="" />
        <div className="external">
          <div className="space"></div>
          <div className="spacefinal"></div>
          <span className="header-name"> Homepage</span>
        </div>
        <a href="http://www.google.com.br">
          <button>
            <div>
              <span className="button-name">Adicionar Anotação</span>
            </div>
          </button>
        </a>
      </Nav>
    </>
  );
};
