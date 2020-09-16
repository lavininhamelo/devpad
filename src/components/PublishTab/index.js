import React from 'react';
import { Container, SaveButton, CancelButton } from './style';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noteThunks } from '../../store/thunks/notes';
import { toast } from 'react-toastify';
import { DeleteButton } from './style';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalDialog from '../ModalDialog';

const PublishTab = ({ isCreating }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [openedModal, setOpenedModal] = React.useState(false);
  const editorState = useSelector((state) => state.editorReducer);
  async function onClickDeleteCard() {
    await noteThunks
      .remove(dispatch, editorState._id)
      .then(() => {
        toast.success('Card deletado com sucesso.');
      })
      .catch((err) => {
        toast.error('Houve um erro ao deletar o card ' + err.getMessage());
      });
    history.goBack();
    setOpenedModal(false);
  }

  return (
    <>
      <ModalDialog
        message={`Deseja deletar o card: ${editorState.title}`}
        icon={faTrash}
        buttons={['OK', 'Cancelar']}
        title={'Confirmar exclusão ?'}
        condition={openedModal}
        onCancel={() => {
          setOpenedModal(false);
        }}
        onSubmit={() => {
          onClickDeleteCard();
        }}
      />
      <Container>
        <div className="leftSide">
          <CancelButton
            onClick={() => {
              history.goBack();
            }}
          >
            Cancel
          </CancelButton>
          {!isCreating && (
            <DeleteButton
              onClick={() => {
                setOpenedModal(true);
              }}
            >
              Delete
            </DeleteButton>
          )}
        </div>

        <SaveButton
          onClick={async () => {
            if (editorState.title.trim().length === 0) {
              toast.error('Título muito pequeno ou inválido.');
              return;
            }
            if (isCreating) {
              await noteThunks.create(dispatch, editorState).then(() => {
                history.goBack();
              });
              toast.success('Card criado com sucesso.');
            } else {
              await noteThunks
                .update(dispatch, editorState._id, editorState)
                .then(() => {
                  history.goBack();
                });
              toast.success('Card atualizado com sucesso.');
            }
          }}
        >
          Save
        </SaveButton>
        <></>
      </Container>
    </>
  );
};

export default PublishTab;
