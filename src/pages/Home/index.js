import React, { useEffect } from 'react';
import { Container, ButtonFixed, Logout } from './style.js';
import { tagThunks } from '../../store/thunks/tags';
import { useSelector, useDispatch } from 'react-redux';
import { noteThunks } from '../../store/thunks/notes';
import { useAuth } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagFilter from '../../components/TagFilter';
import CardList from '../../components/CardList';
import Search from '../../components/Search/index';
import { Creators as EditorCreators } from '../../store/ducks/editor';
import NoContent from '../../components/NoContent';
export const Home = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth();
  React.useEffect(() => {
    noteThunks.list(dispatch);
    dispatch(EditorCreators.CLEAR_ALL());
  }, []);

  const filtered = useSelector((state) => state.searchReducer.filtered);

  useEffect(() => {
    tagThunks.getAll(dispatch);
  }, []);

  return (
    <>
      <Container>
        <Link style={{ textDecoration: 'none' }} to="/create">
          <ButtonFixed>
            <FontAwesomeIcon color="#fff" icon={faPlus} />
          </ButtonFixed>
        </Link>
        <Search />

        <TagFilter />
        {filtered[0] ? <CardList cards={filtered}></CardList> : <NoContent />}
      </Container>
    </>
  );
};

export default Home;
