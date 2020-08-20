import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/GlobalStyles';

export const TagSwitcher = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: auto;

  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 10px;
  div.inputExternal {
    display: flex;
  }
  div.inputContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    height: 40px;
    border-radius: 20px;
    width: 80%;
    padding: 0px 10px;
    outline: 0;
    margin-right: 5px;
    border: 0.5px solid #cccccc;
  }

  div.iconContainer {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 28px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    background-color: ${PRIMARY_COLOR};
    color: white;
    border: 3px solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.iconContainer:hover {
    cursor: pointer;
  }

  div.inputContainer input {
    width: 88%;
    height: 80%;
    border: 0;
  }
  div.tagContainer {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;
