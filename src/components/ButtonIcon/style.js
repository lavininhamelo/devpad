import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/GlobalStyles';

export const ButtonIcon = styled.div`
  cursor: pointer;
  flex-wrap: nowrap;
  flex: 0 1 220px;
  height: 40px;
  border-bottom-left-radius: 28px;
  border-top-left-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 

 
 
  .textButton {
    background-color: ${SECONDARY_COLOR};
    text-transform: uppercase;
    border-radius: 28px;
    font-weight: bold;
    font-size: 0.7rem;
    display: flex;
    height: 100%;
    width: 100%;

    span {
      display: flex;
      width: 85%;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;

      p{
        margin-left: 4px;

        @media(max-width: 1012px) {
          display: none;
        }
      }
    }

     @media(max-width: 800px) {
       display: none;
    }
  }

  .iconButton {
    display: flex;
    width: 55px;
    margin-left: -55px;
    height: 55px;
    border-radius: 28px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    background-color: ${PRIMARY_COLOR};
    border: 4px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

     @media(max-width: 600px) {
           width: 45px;
            margin-left: -35px;
            height: 45px;
            font-size: 15px;
    }

  }
`;
