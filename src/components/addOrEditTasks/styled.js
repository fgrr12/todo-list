import styled from "styled-components";

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  top: -64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.form`
  height: 28%;
  width: 35%;
  background-color: white;
  border-radius: 10px;
  text-align: center;
`;

export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 5fr);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  height: 30px;
  width: 200px;
  text-indent: 5px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  &:focus {
    outline-color: #063c5e;
  }

  @media screen and (max-width: 540px) {
    width: 250px;
  }

  /* For Tablets */
  @media screen and (min-width: 540px) and (max-width: 780px) {
    width: 250px;
  }
`;

export const Textarea = styled.textarea`
  height: 30px;
  width: 200px;
  text-indent: 5px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  &:focus {
    outline-color: #063c5e;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
`;

export const ReturnButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 35px;
  width: 90px;
  background-color: #c0c0c0;
  font-size: 14px;
  color: white;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  letter-spacing: 0.5px;
  margin-right: 10px;

  &:hover {
    animation-name: hoverButtonReturn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes hoverButtonReturn {
    from {
      background-color: #c0c0c0;
    }
    to {
      background-color: #9c9c9c;
    }
  }
`;

export const AddTaskButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 35px;
  width: 130px;
  background-color: #063c5e;
  font-size: 14px;
  color: white;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  letter-spacing: 0.5px;

  &:hover {
    animation-name: hoverButton;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes hoverButton {
    from {
      background-color: #063c5e;
    }
    to {
      background-color: #ff8439;
    }
  }
`;
