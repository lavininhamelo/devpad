import React from 'react';
import { Container } from './style.js';

import TagList from '../TagList';
import CardList from '../CardList';

import Pesquisar from '../Pesquisar/index';
const tags_card = [
  { id: 1, color: '#2d66a9', name: 'css', dense: true, outlined: false },
  { id: 2, color: '#F69A57', name: 'HTML', dense: true, outlined: false },
  { id: 3, color: '#FFB800', name: 'JavaScript', dense: true, outlined: false },
  { id: 4, color: '#F65757', name: 'Tutorial', dense: true, outlined: false },
  { id: 5, color: '#00FF00', name: 'Vue', dense: true, outlined: false },
];

const tags_filter = [
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
      <TagList tags={tags_filter} />
      <CardList
        cards={[
          { title: 'Como criar um layout', tags: tags_card },
          {
            title: 'Como criar um servidor de minecraft para hackear os amigos',
            tags: tags_card,
          },
          {
            title:
              'Como trollar seu amigo colocando um cavalo de troia no computador dele',
            tags: tags_card,
          },
        ]}
      ></CardList>
    </Container>
  );
};
