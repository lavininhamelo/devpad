import React from 'react';
import TagList from '../TagList';
import { Card } from './style.js';
import md5 from 'crypto-md5'
export default ({ title, tags }) => {
  const memorizedGradient = React.useMemo(()=>{
    function returnNewGradient(string) {     
      let colorOne = md5(title,'hex').slice(0,6)
      let colorTwo = md5(title,'hex').slice(7,13)

      return `linear-gradient(180deg, #${colorOne} 0%, #${colorTwo} 100%);`;
    }
    return returnNewGradient(title)
  },[title])
 
  return (
    <div className="items" style={{marginBottom:'0px'}}>
      <Card gradient={()=>memorizedGradient}>
        <h2>{title}</h2>
        <div className="tags">
          <TagList tags={tags}  dense />
        </div>
      </Card>
    </div>
  );
};
