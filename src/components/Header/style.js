import styled from 'styled-components';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR_PRIMARY,
} from '../../styles/GlobalStyles';
export const Nav = styled.nav`
  * {
    color: ${TEXT_COLOR_PRIMARY};
    font-family: Roboto;
  }

  color: white;
  background: red;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  justify-content: space-between;

  button {
    background-color: ${SECONDARY_COLOR};
    cursor: pointer;
    border-radius: 28px;
    width: 222px;
    height: 42px;
    border: none;
  }
  button::after {
    content: '+';
    display: flex;
    position: absolute;
    top: 18px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 28px;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    background-color: ${PRIMARY_COLOR};
    border: 3px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.external {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin-left: 30px;
    background-color: ${SECONDARY_COLOR};
    transform: skew(-20deg);
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
    font-size: 18px;
    line-height: 21px;
    transform: skew(20deg);
  }
  button div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 85%;
    height: 100%;
  }
`;
