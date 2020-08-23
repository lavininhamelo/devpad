import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  position:relative;
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
  justify-content:flex-start;
 
 
  margin-top: 12px;
  width:auto;
  border:1px solid red;
  
  input {
    font-size: 32px;
   border:1px solid blue;
    border-radius:30px;
    border-bottom-left-radius:0;
    border-top-left-radius:0;
    padding-right:5px;
   width:100%;
    border: 0px;
    color: #2b2929;
    resize: none;
    ::placeholder {
      color: #c2c2c2;
    }
  }
`;

export const ContainerURL = styled.div`
  display: flex;
  margin-top: 20px;
  input {
    padding: 20px;
    width: 320px;
    height: 30px;
    background: #f4f4f4;
    border-radius: 30px;
    border: none;
  }
  button {
    width: 50px;
    height: 40px;
    background: #e36396;
    border: 2px solid #ffffff;
    border-radius: 42px;
    color: white;
    font-weight: bold;
  }
  button:hover {
    cursor: pointer;
  }
`;
export const ButtonTag = styled.div`
  display: flex;
  width:200px;
  padding:0px 10px;
  height:30px;
  align-items:center;
  justify-content:center;
  margin-bottom:20px;
  border-radius: 30px;
  justify-content:center;
  border: 1px solid #e5e5e5;
  :hover {
    cursor: pointer;
  }
`;



export const AddTagContainer = styled.div`
  display: flex;
  margin-top:10px;
  flex-direction:row;
  justify-content:flex-start;
  align-items: flex-start;
  width:100%;
  color: #e5e5e5;
  font-family: 'Roboto';
  width:100%;
  
  height:auto;
`;
