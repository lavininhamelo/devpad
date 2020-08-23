import React from 'react';
import { Nav } from './style.js';
import Logo from './assets/Logo.png';
import ButtonIcon from '../ButtonIcon/index';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Link,Redirect} from 'react-router-dom';

export default ({history, name }) => {
  return (
    <>
      <Nav>
       <Link to="/"> <img src={Logo} alt="Logo DevPad" /></Link>
        <div className="external">
          <div className="space"></div>
          <div className="spacefinal"></div>
          <span className="header-name"> {name || 'Sem nome'}</span>
        </div>
        <Link to="/criar"> 
        <ButtonIcon
          name="Adicionar Anotação"
          icon={faAddressBook}
          onClick={() => {
          

          }}
        />
        </Link>
      
      </Nav>
    </>
  );
};
