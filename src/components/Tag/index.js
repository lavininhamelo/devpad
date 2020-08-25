import React from 'react';

import { Container } from './style';

function Tag({ color, name, outlined, clickable ,dense, ...rest }) {
  return (
    <Container color={color} outlined={outlined} clickable={clickable} dense={dense} {...rest}>
      <p>{name}</p>
    </Container>
  );
}

export default Tag;
