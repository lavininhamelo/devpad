import React from 'react';
import { Container } from './style.js';
import CardList from '../CardList/index';
import TagList from '../TagList/index';

import Pesquisar from '../Pesquisar/index';
const tags = [
  { id: 1, color: '#2d66a9', name: 'css', dense: false, outlined: true },
  { id: 2, color: '#F69A57', name: 'HTML', dense: true, outlined: true },
  { id: 3, color: '#FFB800', name: 'JavaScript', dense: true, outlined: true },
  { id: 4, color: '#F65757', name: 'Tutorial', dense: true, outlined: true },
  { id: 5, color: '#00FF00', name: 'Vue', dense: true, outlined: true },
];

const cards = [
  {
    id: 1,
    title: 'Como fazer o efeito de typewriter apenas com CSS e HTML',
    tags: [tags[3], tags[2], tags[1]],
  },
  {
    id: 2,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 3,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como criar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
  {
    id: 4,
    title: 'Como crsadiar um modal bonito',
    tags: [
      tags[4],
      tags[3],
      tags[1],
      tags[2],
      tags[4],
      tags[3],
      tags[1],
      tags[2],
    ],
  },
];

export default () => {
  return (
    <Container>
      <Pesquisar />
      <CardList cards={cards} />
    </Container>
  );
};
