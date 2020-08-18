import React from 'react';
import { ButtonIcon } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ onClick, name, icon }) => {
  return (
    <ButtonIcon onClick={onClick}>
      <div className="textButton">
        <span>{name}</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={icon} />
      </div>
    </ButtonIcon>
  );
};
