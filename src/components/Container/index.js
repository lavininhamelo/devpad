import React from 'react';
import { Container } from './style.js';
import CardList from '../CardList/index';
import TagList from '../TagList/index';

import Pesquisar from '../Pesquisar/index';
const tags = [
  { id: 1, color: '#2d66a9', name: 'css', dense: false, outlined: true },
  { id: 2, color: '#F69A57', name: 'HTML', dense: false, outlined: true },
  { id: 3, color: '#FFB800', name: 'JavaScript', dense: false, outlined: true },
  { id: 4, color: '#F65757', name: 'Tutorial', dense: false, outlined: true },
  { id: 5, color: '#00FF00', name: 'Vue', dense: false, outlined: true },
];

export default () => {
  return (
    <Container>
      <Pesquisar />
      <TagList tags={tags} />
    </Container>
  );
};
