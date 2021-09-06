import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  background-color: #063c5e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const ButtonContainer = styled.div`
  width: 89vw;
  margin-bottom: 5px;
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 25px;
  font-weight: 600;
  font-size: 15px;

  &:hover {
    animation-name: hoverAddButton;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes hoverAddButton {
    from {
      background-color: white;
    }
    to {
      background-color: #ff8439;
      color: white;
    }
  }
`;
