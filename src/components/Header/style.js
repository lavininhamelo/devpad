import styled from 'styled-components';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR_PRIMARY,
} from '../../styles/GlobalStyles';
export const Nav = styled.nav`
  * {
    color: ${TEXT_COLOR_PRIMARY};
    user-select: none;
  }
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


  .lateral{

    @media(max-width: 412px) {
          display: none;
    } 

    padding: 0px 16px;
    display: flex;
    flex: 30 0 0;
    align-items: center;


    :nth-child(1){
    justify-content: flex-start;
    }
    :nth-child(3){
    justify-content: flex-end;
    }

    img{
      width: auto;
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


         @media(max-width: 412px) {
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

      @media(max-width: 412px) {
              transform: skew(0deg);
        } 
  }
  a{
    text-decoration:none;
  }
`;
