import { createGlobalStyle } from 'styled-components';
import myFontURL from './fonts/Roboto-Regular.woff2';
export const PRIMARY_COLOR = '#E36396';
export const SECONDARY_COLOR = '#557DAC';
export const PRIMARY_DARK_COLOR = '';
export const SECONDARY_DARK_COLOR = '';
export const TEXT_COLOR_PRIMARY = '#FFFFFF';

export default createGlobalStyle`
@font-face{
  font-family: 'Roboto';
    src: url(${myFontURL}) format('woff2');
    font-weight: 400;
    font-style: normal;
}
*{
  margin:0;
  padding:0;
  outline:none;
  box-sizing:border-box;
}
`;
