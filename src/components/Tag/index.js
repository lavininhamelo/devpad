import React from 'react';

import { Container } from './style';

function Tag({ color, name, outlined, dense, ...rest }) {
  return (
    <Container color={color} outlined={outlined} dense={dense} {...rest}>
      <p>{name}</p>
    </Container>
  );
}

export default Tag;
