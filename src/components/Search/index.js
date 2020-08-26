/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as SearchStore } from '../../store/ducks/search';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './style';

function Seach() {
  const query = useSelector((state) => state.searchReducer.searchValue);
  const cards = useSelector((state) => state.cardsReducer.cards);
  const tags = useSelector((state) => state.searchReducer.selectedTags);

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(cards);
    console.log(query);
    console.log(tags);
    dispatch(
      SearchStore.setQuery(search),
      SearchStore.filter(query, cards, tags),
    );
  }, [search]);

  return (
    <Container>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={(event) => setSearch(event.target.value)}
      />

      <FontAwesomeIcon color="#aaa" icon={faSearch} size={'sm'} />
    </Container>
  );
}

export default Seach;
