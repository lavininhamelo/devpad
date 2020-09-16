import { createGlobalStyle } from 'styled-components';
import Roboto from './fonts/Roboto-Regular.ttf';
import RobotoBlack from './fonts/Roboto-Black.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';
import RobotoLight from './fonts/Roboto-Light.ttf';
import RobotoThin from './fonts/Roboto-Thin.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';
export const PRIMARY_COLOR = '#E36396';
export const SECONDARY_COLOR = '#557DAC';
export const PRIMARY_DARK_COLOR = '';
export const SECONDARY_DARK_COLOR = '';

export const TEXT_COLOR_PRIMARY = '#FFFFFF';
export const TEXT_COLOR_SECONDARY = '#E9E9E9';

export default createGlobalStyle`


@font-face {
  font-family: Roboto;
  font-weight: normal;
  src: url(${Roboto});
}

@font-face {
  font-family: Roboto;
  font-weight: 100;
  src: url(${RobotoThin});
}

@font-face {
  font-family: Roboto;
  font-weight: 300;
  src: url(${RobotoLight});
}

@font-face {
  font-family: Roboto;
  font-weight: 500;
  src: url(${RobotoMedium});
}

@font-face {
  font-family: Roboto;
  font-weight: 700;
  src: url(${RobotoBold});
}

@font-face {
  font-family: Roboto;
  font-weight: 900;
  src: url(${RobotoBlack});
}

body{
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100vh;

}

#root{
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}


*{

  margin:0;
  padding:0;
  outline:none;
  box-sizing:border-box;
}
.App{
  display:flex;
  flex-direction:column;
}
`;
