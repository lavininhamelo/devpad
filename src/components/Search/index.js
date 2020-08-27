import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as SearchStore } from '../../store/ducks/search';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './style';

function Search() {
  const query = useSelector((state) => state.searchReducer.searchValue);
  const sTags = useSelector((state) => {
    return state.searchReducer.selectedTags;
  });
  const cards = useSelector((state) => state.cardsReducer.cards);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(SearchStore.setQuery(search));
    dispatch(SearchStore.filterAll({ query, cards, tags: sTags }));
  }, [search, sTags]);

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

export default Search;
