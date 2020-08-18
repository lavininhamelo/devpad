import React from 'react';
import { Container } from './style.js';
import CardList from '../CardList/index';
import TagList from '../TagList/index';

import Pesquisar from '../Pesquisar/index';
const cards = [
  {
    id: 1,
    title: 'Como fazer o efeito de typewriter apenas com CSS e HTML',
    tags: [
      { id: 1, color: '#2d66a9', name: 'css' },
      { id: 2, color: '#F69A57', name: 'HTML' },
      { id: 3, color: '#F65757', name: 'Tutorial' },
    ],
  },
  {
    id: 2,
    title: 'Como criar um modal bonito',
    tags: [
      { id: 1, color: '#2d66a9', name: 'css' },
      { id: 2, color: '#F69A57', name: 'HTML' },
      { id: 4, color: '#FFB800', name: 'JavaScript' },
      { id: 5, color: '#F65757', name: 'Tutorial' },
      { id: 6, color: '#F65757', name: 'Tutorial' },
      { id: 7, color: '#F65757', name: 'Tutorial' },
      { id: 8, color: '#F65757', name: 'Tutorial' },
    ],
  },
];

const tags = [
  { id: 1, color: '#2d66a9', name: 'css', dense: false, outlined: true },
  { id: 2, color: '#F69A57', name: 'HTML', dense: false, outlined: true },
  { id: 4, color: '#FFB800', name: 'JavaScript', dense: false, outlined: true },
  { id: 5, color: '#F65757', name: 'Tutorial', dense: false,, outlined: true },
];

export default () => {
  return (
    <Container>
      <Pesquisar />
      <TagList tags={tags} />
      <CardList cards={cards} />
    </Container>
  );
};
