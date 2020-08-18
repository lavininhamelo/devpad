import React from 'react';
import { CardList } from './style';
import Card from '../Card/index';
import Tag from '../Tag';
export default ({ cards }) => {
  return (
    <CardList>
      {cards &&
        cards.map(({ title, tags }) => {
          return <Card key={title} title={title} tags={tags} />;
        })}
    </CardList>
  );
};
