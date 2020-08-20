import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RoundedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 48px;
  height: 48px;
  background: #e36396;
  border: 5px solid #ffffff;
  border-radius: 93px;
  z-index: 2;
  :hover {
    background: #d65c8c;
  }
`;

export const LineAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  hr {
    position: absolute;
    width: 60%;
    background: #c4c4c4;
    border: 1px solid #c4c4c4;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 32px;
  width: 100%;
`;
