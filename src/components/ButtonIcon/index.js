import React from 'react';
import { ButtonIcon } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ onClick, name, icon }) => {
  return (
    <ButtonIcon onClick={onClick}>
      {name && (
        <div className="textButton">
          <span>{name}<p>anotação</p></span>
        </div> 
      )}
      <div className="iconButton">
        <FontAwesomeIcon icon={icon} />
      </div>
    </ButtonIcon>
  );
};
