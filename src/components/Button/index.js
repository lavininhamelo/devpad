import React from 'react';
import { Container } from './style';
const Button = ({ type, children }) => {
  return <Container type={type}>{children}</Container>;
};

export default Button;
