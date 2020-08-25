import React from 'react';
import TagList from '../TagList';
import { Card } from './style.js';
export default ({ title, tags }) => {
  function returnNewGradient() {
    let colorOne = '#000000'.replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });

    let colorTwo = '#000000'.replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    while (colorOne === colorTwo) {
      colorTwo = '#000000'.replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
      });
    }

    return `linear-gradient(180deg, ${colorOne} 0%, ${colorTwo} 100%);`;
  }
  return (
    <div className="items">
      <Card>
        <h2>{title}</h2>
        <div className="tags">
          <TagList tags={tags}  dense />
        </div>
      </Card>
    </div>
  );
};
