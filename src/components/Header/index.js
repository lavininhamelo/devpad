import React from 'react';
import { Nav } from './style.js';
import Logo from '../../assets/Logo.png';
import ButtonIcon from '../ButtonIcon/index';
import { faPlus, faSave, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default ({ history, name, icon, to }) => {
  const iconType = (value) => {
    if (value === 'save') {
      return faSave;
    } else if (value === 'edit') {
      return faPen;
    } else return faPlus;
  };

  const nameType = (value) => {
    if (value === 'save') {
      return 'Salvar';
    } else if (value === 'edit') {
      return 'Editar';
    } else return 'Adicionar';
  };

  return (
    <>
      <Nav>
        <Link className="lateral" to="/">
          {' '}
          <img src={Logo} alt="Logo DevPad" />
        </Link>
        <div className="external">
          <div className="space"></div>
          <div className="spacefinal"></div>

          <span className="header-name">{name || 'Sem nome'}</span>
        </div>
        <Link className="lateral" to={to}>
          <ButtonIcon
            name={nameType(icon)}
            icon={iconType(icon)}
            onClick={() => {}}
          />
        </Link>
      </Nav>
    </>
  );
};
