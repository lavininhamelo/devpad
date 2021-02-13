import styled from 'styled-components';
import { TEXT_COLOR_PRIMARY, PRIMARY_COLOR } from '../../styles/GlobalStyles';

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  background-color: #f3f3f3;
  min-height: 80px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  a {
    color: ${PRIMARY_COLOR};
    font-weight: bold;
    text-decoration: none;
  }
`;
