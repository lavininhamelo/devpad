import styled from 'styled-components';
export const ColorPicker = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  :hover {
    cursor: pointer;
  }
  .container {
    cursor: default;
    position: relative;

    top: 30px;
    left: -75px;
    width: 200px;
    height: 200px;
  }
  div.circleColor {
    z-index: 5;
    width: 20px;
    height: 20px;
    border: 2px solid #cecece;
    border-radius: 50%;
    background-color: ${(props) => {
      return props.color ? props.color : 'green';
    }};
  }
`;
