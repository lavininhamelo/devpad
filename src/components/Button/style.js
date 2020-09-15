import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../styles/GlobalStyles';

export const Container = styled.button`
  background: ${PRIMARY_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  display: flex;
  font-size: 12px;
  width: 100%;
  border-radius: 25px;
  font-weight: 600;
  padding: 0px 24px;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  border: none;

  &:hover {
    background: #d45688;
  }
`;
