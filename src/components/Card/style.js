import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 310px;
  height: 100%;
  margin-right: 20px;
  background: #ffffff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 3px 3px 40px rgba(0, 0, 0, 0.21);
  top: 0;
  bottom: 0;

  margin-bottom: 20px;
  transition: all 200ms ease;
  ::after {
    content: '';
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 85%;
    width: 10px;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
    background: ${(props) => (props.gradient ? props.gradient() : 'black')};
  }

  h2 {
    display: flex;
    justify-content: flex-start;
    font-weight: bold;
    flex-wrap: wrap;
    font-size: 16px;
    width: 100%;
    height: auto;
    line-height: 21px;

    color: #333333;
    margin-bottom: 5px;
  }
  div.tags {
    display: flex;
    width: 100%;
    padding: 2px 0px;
    height: 100%;
    justify-content: flex-start !important;
    align-items: flex-start !important;
  }
  div.tags > * {
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  :hover {
    position: relative;
    top: -8px;
    cursor: pointer;
  }
  div.items {
    display: flex;
    height: 500px;
  }
`;
