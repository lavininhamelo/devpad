import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px;
  height: auto;
  margin-right: 20px;
  background: #ffffff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 3px 3px 40px rgba(0, 0, 0, 0.21);

  top: 0;
  bottom: 0;
  margin-bottom: 20px;
  transition: all 200ms ease;
  h2 {
    display: flex;
    justify-content: flex-start;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    line-height: 21px;
    color: #333333;
    margin-bottom: 5px;
  }
  div.tags {
    display: flex;
    width: 100%;
    padding: 2px 0px;
    height: 100%;
  }
  div.tags > * {
    flex-wrap: wrap;
    align-items: flex-start;
  }
  :hover {
    position: relative;
    top: -8px;
    cursor: pointer;
  }
`;
