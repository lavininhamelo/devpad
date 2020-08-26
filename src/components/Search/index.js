import React, {useState, useEffect}  from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Creators as CardStore} from '../../store/ducks/cards'
import {Creators as earchStore} from '../../store/ducks/search'

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './style';

function Seach() {
  const query = useSelector(state => state.cardsReducer.query);
  const tags = useSelector(state => state.cardsReducer.query);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  


  useEffect(() => {
    // dispatchSearchStores.setQuery(search);
  }, [search]);


  return (
    <Container>
      <input type="text" name="search"  placeholder="Search..." onChange={event => setSearch(event.target.value)}/>
           

      <FontAwesomeIcon color="#aaa" icon={faSearch} size={'sm'} />
    </Container>
  );
}

export default Seach;
