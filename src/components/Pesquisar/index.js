import React from 'react';
// import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './style';

function Pesquisar() {
  return (
    <Container>
      <input type="text" name="search" placeholder="Pesquisar..." />
      {/* <FontAwesomeIcon icon={faUniversity} size={20} /> */}
      <FontAwesomeIcon icon="coffee" />
    </Container>
  );
}

export default Pesquisar;
