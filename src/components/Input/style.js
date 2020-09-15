import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #f4f5f7;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  height: 48px;
  display: flex;
  width: 100%;
  border-radius: 25px;
  padding: 0px 24px;

  input {
    background: transparent;
    outline: 0;
    height: 40px;
    flex: 1;
    border: 0px;
    margin-left: 10px;
    color: #888;

    &::placeholder {
      color: #d0d0d0;
    }
  }
  img {
    height: 20px;
  }
`;
