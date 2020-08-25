import React, {useState, useEffect}  from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Creators} from '../../store/ducks/cards'

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './style';

function Seach() {
  const cards = useSelector(state => state.cardsReducer.cards);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  function findName (value, query) {
    if(value.indexOf(query) > -1) return value;
  }

  useEffect(() => {
    const visibleCards = cards.filter(item => findName(item.title.toUpperCase(),search.toUpperCase()))
    dispatch(Creators.filter(visibleCards));
  }, [search]);


  return (
    <Container>
      <input type="text" name="search"  placeholder="Search..." onChange={event => setSearch(event.target.value)}/>
           

      <FontAwesomeIcon color="#aaa" icon={faSearch} size={'sm'} />
    </Container>
  );
}

export default Seach;
