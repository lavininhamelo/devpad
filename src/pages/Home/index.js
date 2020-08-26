import React from 'react';
import { Container } from './style.js';
import {tags_filter, cards} from "../../fakeData/index"

import TagFilter from '../../components/TagFilter';
import CardList from '../../components/CardList';
import Seach from '../../components/Search/index';
import { useSelector } from 'react-redux';


export const Home = () => {


const filtered = useSelector(state => state.cardsReducer.filtered);

  return (
    <Container>
      <Seach />
      <TagFilter />
      <CardList
        cards={filtered}
      ></CardList>
   
    </Container>
  );
};

export default Home;