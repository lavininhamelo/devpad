import React, { useEffect } from 'react';
import { Container } from './style.js';
import { tags_filter, cards } from '../../fakeData/index';
import { tagThunks } from '../../store/thunks/tags';
import { useSelector, useDispatch } from 'react-redux';
import { noteThunks } from '../../store/thunks/notes';
import TagFilter from '../../components/TagFilter';
import CardList from '../../components/CardList';
import Search from '../../components/Search/index';

export const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    noteThunks.list(dispatch);
  }, []);

  const filtered = useSelector((state) => state.searchReducer.filtered);

  useEffect(() => {
    tagThunks.getAll(dispatch);
  }, []);

  return (
    <Container>
      <Search />
      <TagFilter />
      {filtered[0] ? <CardList cards={filtered}></CardList> : 'Nada aqui'}
    </Container>
  );
};

export default Home;
