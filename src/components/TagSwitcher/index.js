import React from 'react';
import { TagSwitcher } from './style';
import ColorPicker from '../ColorPicker';
import Tag from '../Tag';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => {
  const [availableTags, setAvailableTags] = React.useState([]);
  const [colorPicker, setColorPicker] = React.useState('#000');
  const [tagInput, setTagInput] = React.useState('');
  function createNewTag(tagName) {
    let isExists = availableTags.some((value) => tagName === value.name);
    if (isExists || !tagName) {
      return 'Retorna um erro aqui';
    }
    availableTags.push({ name: tagName, color: colorPicker });
    setTagInput('');
  }

  return (
    <TagSwitcher>
      <div className="inputExternal">
        <div className="inputContainer">
          <input
            type="text"
            value={tagInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                return createNewTag(tagInput);
              }
            }}
            onChange={(event) => setTagInput(event.target.value)}
          ></input>
          <ColorPicker
            defaultColor={colorPicker}
            onColorSelected={(color) => setColorPicker(color)}
          />
        </div>
        <div className="iconContainer">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>

      <div className="tagContainer">
        {availableTags &&
          availableTags.map(({ name, color }) => {
            return <Tag key={name} name={name} color={color} outlined dense />;
          })}
      </div>
    </TagSwitcher>
  );
};
