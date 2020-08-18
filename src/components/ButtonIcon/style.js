import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/GlobalStyles';

export const ButtonIcon = styled.div`
  cursor: pointer;
  flex-wrap: nowrap;
  width: 220px;
  height: 40px;
  border-bottom-left-radius: 28px;
  border-top-left-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div.textButton span {
    display: flex;
    width: 85%;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
  div.textButton {
    background-color: ${SECONDARY_COLOR};
    border-radius: 28px;
    font-size: 9pt;
    display: flex;
    height: 100%;
    width: 100%;
  }
  div.iconButton {
    display: flex;
    width: 40px;
    margin-left: -40px;
    height: 40px;
    border-radius: 28px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    background-color: ${PRIMARY_COLOR};
    border: 3px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
