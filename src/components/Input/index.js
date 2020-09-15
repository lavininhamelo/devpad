import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './style';

const Input = ({ type, autoFocus, value, onChange, icon, placeholder }) => {
  return (
    <Container>
      <FontAwesomeIcon color="#d0d0d0" icon={icon} size={'xs'} />
      <input
        autoFocus={autoFocus}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        icon={icon}
      />
    </Container>
  );
};

export default Input;
