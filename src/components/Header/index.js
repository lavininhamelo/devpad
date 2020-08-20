import React from 'react';
import { Nav } from './style.js';
import Logo from './assets/Logo.png';
import ButtonIcon from '../ButtonIcon/index';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

export default ({ name }) => {
  return (
    <>
      <Nav>
        <img src={Logo} alt="Logo DevPad" />
        <div className="external">
          <div className="space"></div>
          <div className="spacefinal"></div>
          <span className="header-name"> {name || 'Sem nome'}</span>
        </div>

        <ButtonIcon
          name="Adicionar Anotação"
          icon={faAddressBook}
          onClick={() => {
            console.log('Clicado');
          }}
        />
      </Nav>
    </>
  );
};
