import React from 'react';
import { TagSwitcher } from './style';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import DialogAlert, { options } from '../DialogAlert';
import ColorPicker from '../ColorPicker';
import Tag from '../Tag';

export default (
  { onTagCreated, onTagIsClicked, tagsAlreadySelected },
  props,
) => {
  const [colorPicker, setColorPicker] = React.useState('#000');
  const [isColorPickerActive, setIsColorPickerActive] = React.useState(false);
  const [tagInput, setTagInput] = React.useState('');
  
  function createNewTag(tagName) {
    let isExists = tagsAlreadySelected.some(
      (value) => tagName.toLowerCase() === value.name.toLowerCase(),
    );
    if (isExists) {
      return toast.error(`Já existe uma tag: ${tagName}`, options);
    }
    if (!tagName || tagName.trim() === '') {
      return toast.error(`Por favor, informe um nome válido.`, options);
    }
    onTagCreated({
      id: tagsAlreadySelected.length + 1,
      name: tagName,
      color: colorPicker,
    });

    setTagInput('');

    return toast.success('Tag criada com sucesso.');
  }

  return (
    <>
      <DialogAlert />
      <TagSwitcher>
        <div className="inputExternal">
          <div className="inputContainer">
            <input
              type="text"
              value={tagInput}
              placeholder="Criar tag"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  return createNewTag(tagInput);
                }

                setIsColorPickerActive(false);
              }}
              onFocus={() => {
                setIsColorPickerActive(false);
              }}
              onChange={(event) => setTagInput(event.target.value)}
            />
            <ColorPicker
              defaultColor={colorPicker}
              onColorSelected={(color) => {
                setColorPicker(color);
              }}
              isColorPickerActive={isColorPickerActive}
              setIsColorPickerActive={setIsColorPickerActive}
            />
          </div>
          <div
            className="iconContainer"
            onClick={() => createNewTag(tagInput || '')}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>

        <div className="tagContainer">
          {tagsAlreadySelected &&
            tagsAlreadySelected.map(({ name, color, selected }) => {
              return (
                <Tag
                  key={name}
                  clickable
                  name={name}
                  color={color}
                  selected={selected}
                  onClick={() => {
                    onTagIsClicked(name, color, selected);
                  }}
                  outlined
                  dense
                />
              );
            })}
        </div>
      </TagSwitcher>
    </>
  );
};
