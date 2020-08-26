import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { TagFilter } from './style';
import {Creators} from '../../store/ducks/cards'
import Tag from '../Tag/index';

export default () => {

  const [selectedTags, setSelectedTags] = useState([]);
  const cards = useSelector(state => state.cardsReducer.cards);
  const filtered = useSelector(state => state.cardsReducer.filtered);
  const tags = useSelector(state => state.tagsReducer.tags);
  const dispatch = useDispatch();

  function getList() {
    return filtered[0] ? filtered : cards;
  }

  function setTags(){
    const copyArray = [...tags];
    setSelectedTags(copyArray);
  }

  function handleTag(tag){
    const index = selectedTags.findIndex(function(el) { return (el.id === tag.id)  });
    if(index > -1) {
      if(!tag.selected){
       let copyArray = [...selectedTags]; // copying the old datas array
       copyArray[index].selected = true;
       setSelectedTags(copyArray);
      } else {
        let copyArray = [...selectedTags]; // copying the old datas array
        copyArray[index].selected = false;
        setSelectedTags(copyArray);
      }
    }
  
  };

  function findByTag(card,tags){
    let count = 0;
    for(let tag of tags){
        for(let c of card.tags){
          if(c.name == tag.name){
            count++;
          }
        } 
    }

    if(count === tags.length) {
      return card;
    } 
  }

  useEffect(() => {
    tags.map((item) => {
        item.selected = false;
        return item;
      });
     
    setTags();
  },[])

  useEffect(() => {
    const filterTags = selectedTags.filter(function(el) { return (el.selected === true)  });
    if(filterTags[0]){
      const visibleCards = cards.filter(card => findByTag(card,filterTags))
      dispatch(Creators.filter(visibleCards));
    } else dispatch(Creators.filter(getList()));
  }, [selectedTags]);




  return (
    <TagFilter>
      {selectedTags[0] &&
        selectedTags.map(tag => {
          return (
            <Tag
              key={tag.id}
              color={tag.color}
              name={tag.name}
              selected={tag.selected}
              outlined
              clickable
              onClick={() => handleTag(tag)}
            />
          );
        })}
    </TagFilter>
  );
};
