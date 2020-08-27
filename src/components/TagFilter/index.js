/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TagFilter } from './style';
import { Creators as SearchStore } from '../../store/ducks/search';
import Tag from '../Tag/index';

export default () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const query = useSelector((state) => state.searchReducer.searchValue);
  const sTags = useSelector((state) => state.searchReducer.selectedTags);
  const cards = useSelector((state) => state.cardsReducer.cards);
  const tags = useSelector((state) => state.tagsReducer.tags);
  const dispatch = useDispatch();

  function setTags() {
    const copyArray = [...tags];
    setSelectedTags(copyArray);
  }

  function handleTag(tag) {
    const index = selectedTags.findIndex(function (el) {
      return el.id === tag.id;
    });
    if (index > -1) {
      if (!tag.selected) {
        let copyArray = [...selectedTags]; // copying the old datas array
        copyArray[index].selected = true;
        setSelectedTags(copyArray);
      } else {
        let copyArray = [...selectedTags]; // copying the old datas array
        copyArray[index].selected = false;
        setSelectedTags(copyArray);
      }
    }
  }

  useEffect(() => {
    tags.map((item) => {
      item.selected = false;
      return item;
    });

    setTags();
  }, []);

  useEffect(() => {
    const filterTags = selectedTags.filter(function (el) {
      return el.selected === true;
    });
    dispatch(SearchStore.setTags(filterTags));
    dispatch(SearchStore.filterAll({ query, cards, sTags }));
  }, [selectedTags, query]);

  return (
    <TagFilter>
      {selectedTags[0] &&
        selectedTags.map((tag) => {
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
