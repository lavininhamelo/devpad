import styled from 'styled-components';
import { Link as To } from 'react-router-dom';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/GlobalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  max-width: 360px;
  margin-top: -120px;
  padding: 20px;
  img {
    margin: 64px 0px;
  }
  h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${SECONDARY_COLOR};
    margin-bottom: 16px;
  }

  p {
    width: 90%;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #9a9393;
    margin-bottom: 32px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    Button {
      margin-bottom: 18px;
    }

    span {
      font-size: 13px;
      color: #999;
    }
  }
`;
export const Link = styled(To)`
  color: ${PRIMARY_COLOR};
  &:hover {
    color: #d45688;
  }
`;
