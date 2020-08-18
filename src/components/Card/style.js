import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 315px;

  margin-right: 20px;
`;

export const Fundo = styled.div`
  background: ${(props) => props.gradient()};
  border-radius: 20px 0px 0px 20px;
  width: 10px;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 305px;
  border: 1px solid red;
  height: auto;
  background: #ffffff;
  box-shadow: 3px 3px 40px rgba(0, 0, 0, 0.21);
  border-radius: 20px;
  padding: 20px 20px;
  z-index: 2;

  h2 {
    display: flex;
    flex: 1;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #333333;
  }

  div {
    margin-top: 8px;
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
