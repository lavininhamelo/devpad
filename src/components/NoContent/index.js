import React from 'react';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from './style';

function NoContent() {
  return (
    <Container>
      <FontAwesomeIcon size="lg" icon={faFrown}></FontAwesomeIcon>
      <h3>No content, add new card...</h3>
    </Container>
  );
}

export default NoContent;
