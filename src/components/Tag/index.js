import React from 'react';

import { Container } from './style';

function Tag({ color, name, outlined, dense }) {
  return (
    <Container color={color} outlined={outlined} dense={dense}>
      <p>{name}</p>
    </Container>
  );
}

export default Tag;
