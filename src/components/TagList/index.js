import React from 'react';
import { TagList } from './style';
import Tag from '../Tag/index';

export default ({ tags,dense, clickable,outlined}) => {
  return (
    <TagList>
      {tags &&
        tags.map(({ name, color }, index) => {
          return (
            <Tag
              key={index}
              color={color}
              name={name}
              dense={dense}
              outlined={outlined}
              clickable={clickable}
            />
          );
        })}
    </TagList>
  );
};
