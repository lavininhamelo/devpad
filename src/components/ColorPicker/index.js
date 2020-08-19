import React from 'react';
import { ColorPicker } from './style';
import { BlockPicker } from 'react-color';
export default ({ defaultColor, onColorSelected, onClick }) => {
  const [color, setColor] = React.useState(defaultColor || '#FFF');

  const [isVisibleContainer, setIsVisibleContainer] = React.useState(false);
  return (
    <>
      <ColorPicker color={color}>
        <div
          className="circleColor"
          onClick={() => {
            setIsVisibleContainer(!isVisibleContainer);
          }}
        ></div>
        {isVisibleContainer && (
          <div className="container">
            <BlockPicker
              color={color}
              onChangeComplete={(color) => {
                setIsVisibleContainer(false);
                setColor(color.hex);
                onColorSelected(color.hex);
              }}
            />
          </div>
        )}
      </ColorPicker>
    </>
  );
};
