import React from 'react';
import { Container } from './style.js';
import {tags_filter, cards} from "../../fakeData/index"

import TagList from '../../components/TagList';
import CardList from '../../components/CardList';
import Seach from '../../components/Search/index';
import { useSelector } from 'react-redux';


export const Home = () => {


const filtered = useSelector(state => state.cardsReducer.filtered);
const tags = useSelector(state => state.tagsReducer.tags);

  return (
    <Container>
      <Seach />
      <TagList clickable tags={tags} outlined/>
      <CardList
        cards={filtered}
      ></CardList>
   
    </Container>
  );
};

export default Home;