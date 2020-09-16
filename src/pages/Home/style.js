import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 20px;
  width: 90vw;
  flex: 1;
  background-color: #fff;
`;

export const Logout = styled.div``;
export const ButtonFixed = styled.div`
  position: fixed;
  z-index: 10;
  right: 5%;
  bottom: 15%;
  width: 56px;
  height: 56px;
  background: #e36396;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #d45688;
  }
`;
