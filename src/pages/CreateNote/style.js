import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  padding: 64px 0px;
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin-right: 8px;
    font-weight: bold;
    font-size: 14px;
    color: #8d8e8e;
    text-transform: uppercase;
  }
`;

export const TitleInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  textarea {
    font-size: 32px;
    border: 0px;
    color: #2b2929;
    resize: none;
    ::placeholder {
      color: #c2c2c2;
    }
  }
`;
