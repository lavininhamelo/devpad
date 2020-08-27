import React from 'react';
import { Container } from './style.js';
import { tags_filter, cards } from '../../fakeData/index';

import TagFilter from '../../components/TagFilter';
import CardList from '../../components/CardList';
import Search from '../../components/Search/index';
import { useSelector } from 'react-redux';

export const Home = () => {
  const filtered = useSelector((state) => state.searchReducer.filtered);

  return (
    <Container>
      <Search />
      <TagFilter />
      {filtered[0] ? <CardList cards={filtered}></CardList> : 'Nada aqui'}
    </Container>
  );
};

export default Home;
