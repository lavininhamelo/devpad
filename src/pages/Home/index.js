import React from 'react';
import { Container } from './style.js';
import {tags_filter, cards} from "../../fakeData/index"

import TagList from '../../components/TagList';
import CardList from '../../components/CardList';
import Seach from '../../components/Search/index';

export default () => {
  return (
    <Container>
      <Seach />
      <TagList tags={tags_filter} />
      <CardList
        cards={cards}
      ></CardList>
   
    </Container>
  );
};
