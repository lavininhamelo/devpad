import styled from 'styled-components';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR_PRIMARY,
} from '../../styles/GlobalStyles';
export const Nav = styled.nav`
  > * {
    font-family: 'Roboto';
    user-select: none;
  }
  color: ${TEXT_COLOR_PRIMARY};
  z-index: 5;
  color: white;
  background: red;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  /* padding: 0px 10px; */
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  justify-content: space-between;

  .lateral {
    @media (max-width: 412px) {
      display: none;
    }

    padding: 0px 16px;
    display: flex;
    flex: 30 0 0;
    align-items: center;

    :nth-child(1) {
      justify-content: flex-start;
    }
    :nth-child(3) {
      justify-content: flex-end;
    }

    img {
      width: auto;
      max-height: 60px;
      height: 100%;
    }
  }

  div.external {
    flex: 1 1 50%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin-left: 30px;
    background-color: ${SECONDARY_COLOR};
    transform: skew(-20deg);

    @media (max-width: 412px) {
      transform: skew(0deg);
      margin-left: 0px;
    }
  }
  div.space {
    position: absolute;
    left: 0;
    width: 20px;
    height: 100%;
    background-color: ${PRIMARY_COLOR};
    border-right: 5px white solid;
  }
  div.spacefinal {
    position: absolute;
    top: 0;
    right: 0px;
    border-left: 5px white solid;
    width: 20px;
    height: 100%;
    background-color: ${PRIMARY_COLOR};
  }
  div.external span {
    font-style: normal;
    font-weight: bold;
    font-size: 11pt;
    line-height: 21px;
    transform: skew(20deg);

    @media (max-width: 412px) {
      transform: skew(0deg);
    }
  }
  a {
    text-decoration: none;
  }
`;

export const ButtonOptions = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  bottom: 2px;
  right: 0;
  background-color: white;
  > * {
    font-size: 10px;
    width: 10px;
    height: 14px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 52px;
  div.group {
    display: flex;
    align-items: center;
    font-size: 10pt;
  }
  div.group span {
    color: black;
    text-transform: lowercase;
    color: #666666;
  }

  div.circle {
    display: flex;
    font-size: 18pt;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #eeeeee;
    border-radius: 50%;
    margin-left: 10px;
    color: #ccc;
  }
  div.panel-options {
    position: absolute;
    display: flex;
    justify-content: space-between;
    color: #666666;

    width: 100%;
    height: auto;
    top: 100%;
    left: 0;
    border-radius: 10px;
    background-color: #eeeeee;
  }
  div.panel-options ul li {
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    list-style: none;
  }
  div.panel-options ul li:hover {
    background-color: #bbb;
    cursor: pointer;
  }
  div.panel-options ul {
    border-radius: 10px;
    width: 100%;
  }
  div.panel-options ul li span {
    text-transform: capitalize;
  }

  /* }
  da tempo de terminar btw
  mas ai eh 11h, eh so dar esse migue */
  /* Tem que enviar o projeto pro pessoal ne kkk, 
  pelo menos o figma e o doc */

  /* acabei de arrumar #FD figma */
  /* sim. Como q pinta o react icon? */
  /* Só o figma e o doc mesmo */

  /* color="" */
`;
