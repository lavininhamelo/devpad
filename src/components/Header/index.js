import React from 'react';
import { ButtonOptions, Nav, UserDiv } from './style.js';
import Logo from '../../assets/Logo.png';
import ButtonIcon from '../ButtonIcon/index';
import {
  faPlus,
  faSave,
  faPen,
  faUser,
  faInfo,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ history, name, icon, to }) => {
  const { user, logout } = useAuth();
  const [opened, setOpened] = React.useState(false);
  const iconType = (value) => {
    if (value === 'save') {
      return faSave;
    } else if (value === 'edit') {
      return faPen;
    } else return faPlus;
  };

  const nameType = (value) => {
    if (value === 'save') {
      return 'Save';
    } else if (value === 'edit') {
      return 'Edit';
    } else return 'Add';
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
        <div className="lateral">
          <UserDiv>
            <div className="group">
              <span>{user ? user.username : 'Usuário'}</span>
              <div className="circle">
                <FontAwesomeIcon icon={faUser} />
                <ButtonOptions onClick={() => setOpened(!opened)}>
                  <FontAwesomeIcon icon={faArrowDown} />
                </ButtonOptions>
              </div>
              <div
                style={{ visibility: opened ? 'visible' : 'hidden' }}
                className="panel-options"
              >
                <ul>
                  <li
                    onClick={() => {
                      logout();
                    }}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <span>Logout</span>
                  </li>
                  <li>
                    {' '}
                    <FontAwesomeIcon icon={faInfo} />
                    <span>About</span>
                  </li>
                </ul>
              </div>
            </div>
          </UserDiv>
        </div>
      </Nav>
    </>
  );
};
