import React from 'react';
import TagList from '../TagList';
import { Card, ButtonsAside, DeleteButton } from './style.js';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalDialog from '../ModalDialog';
import { noteThunks } from '../../store/thunks/notes';
import md5 from 'crypto-md5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default ({ isRedirect, url, id, title, tags, path }) => {
  const [hovered, setHovered] = React.useState(false);
  const [openedModal, setOpenedModal] = React.useState(false);
  const dispatch = useDispatch();
  const memorizedGradient = React.useMemo(() => {
    function returnNewGradient(string) {
      let colorOne = md5(title, 'hex').slice(0, 6);
      let colorTwo = md5(title, 'hex').slice(7, 13);

      return `linear-gradient(180deg, #${colorOne} 0%, #${colorTwo} 100%);`;
    }
    return returnNewGradient(title);
  }, [title]);

  async function onClickDeleteCard() {
    noteThunks
      .remove(dispatch, id)
      .then(() => {
        toast.success('Card was deleted.');
      })
      .catch((err) => {
        toast.error('There was an error deleting the card ' + err.getMessage());
      });

    setOpenedModal(false);
  }

  return (
    <>
      <ModalDialog
        message={`Do you want to delete the card: ${title}`}
        icon={faTrash}
        buttons={['OK', 'Cancelar']}
        title="Delete card?"
        condition={openedModal}
        onCancel={() => {
          setOpenedModal(false);
        }}
        onSubmit={() => onClickDeleteCard()}
      />
      <div
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        className="items"
        style={{ marginBottom: '0px' }}
      >
        <Card gradient={() => memorizedGradient}>
          {!isRedirect ? (
            <Link style={{ textDecoration: 'none' }} to={'/view/' + path}>
              <h2>{title}</h2>
              <div className="tags">
                <TagList tags={tags} dense />
              </div>
            </Link>
          ) : (
            <a
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
              href={url}
              target="_BLANK"
            >
              <h2>{title}</h2>
              <div className="tags">
                <TagList tags={tags} dense />
              </div>
            </a>
          )}

          <ButtonsAside style={{ opacity: hovered ? 1 : 0 }}>
            <DeleteButton onClick={() => setOpenedModal(true)}>
              <FontAwesomeIcon icon={faTrash} />
            </DeleteButton>
          </ButtonsAside>
        </Card>
      </div>
    </>
  );
};
