import React, { useState } from 'react';
import Switch from 'react-switch';
import NewBlock from '../../components/NewBlock';
import { Container, Caption, TitleInput } from './style';

function CreateNote() {
  const [type, setType] = useState(false);
  return (
    <Container>
      <Caption>
        <h2>new note</h2>{' '}
        <Switch
          onChange={() => setType(!type)}
          checked={type}
          checkedIcon={false}
          uncheckedIcon={false}
          height={18}
          width={30}
          handleDiameter={10}
          offColor="#CCC"
          onColor="#86d3ff"
        />
      </Caption>
      <TitleInput>
        <textarea
          rows="2"
          placeholder="Enter the name of your note..."
          maxlength="150"
        ></textarea>
      </TitleInput>
      <NewBlock />
    </Container>
  );
}

export default CreateNote;
