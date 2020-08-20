import React from 'react';
import { Container } from './style.js';

import TagList from '../TagList';
import CardList from '../CardList';

import Pesquisar from '../Pesquisar/index';
const tagse = [
  { id: 1, color: '#2d66a9', name: 'css', dense: true, outlined: true },
  { id: 2, color: '#F69A57', name: 'HTML', dense: true, outlined: true },
  { id: 3, color: '#FFB800', name: 'JavaScript', dense: true, outlined: true },
  { id: 4, color: '#F65757', name: 'Tutorial', dense: true, outlined: true },
  { id: 5, color: '#00FF00', name: 'Vue', dense: true, outlined: true },
];

export default () => {
  return (
    <Container>
      <Pesquisar />
      <TagList tags={tagse} />
      <CardList
        cards={[
          { title: 'Como criar um layout', tags: tagse },
          {
            title: 'Como criar um servidor de minecraft para hackear os amigos',
            tags: tagse,
          },
          {
            title:
              'Como trollar seu amigo colocando um cavalo de troia no computador dele',
            tags: tagse,
          },
        ]}
      ></CardList>
    </Container>
  );
};
