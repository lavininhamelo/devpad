import React from 'react';
import { ColorPicker } from './style';
import { BlockPicker } from 'react-color';
export default ({
  defaultColor,
  onColorSelected,
  onClick,
  isColorPickerActive,
  setIsColorPickerActive,
}) => {
  const [color, setColor] = React.useState(defaultColor || '#FFF');
  return (
    <>
      <ColorPicker>
        <div
          className="circleColor"
          style={{ backgroundColor: color }}
          onClick={() => setIsColorPickerActive(!isColorPickerActive)}
        ></div>
        {isColorPickerActive && (
          <div className="container">
            <BlockPicker
              color={color}
              onChangeComplete={(color) => {
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
