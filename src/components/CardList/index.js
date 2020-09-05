import React from 'react';
import { CardList } from './style';
import Card from '../Card/index';

export default ({ cards }) => {
  return (
    <CardList>
      {cards &&
        cards.map(({ title, tags }, index) => {
          return <Card key={index} title={title} tags={tags} />;
        })}
    </CardList>
  );
};
