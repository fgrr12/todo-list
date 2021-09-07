import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #063c5e;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 30%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  /* For Mobile */
  @media screen and (max-width: 540px) {
    width: 72%;
    height: 40%;
  }
  /* For Tablets */
  @media screen and (min-width: 540px) and (max-width: 780px) {
    height: 40%;
  }
  @media screen and (min-width: 780px) and (max-width: 1024px) {
    width: 55%;
  }
`;

export const DataSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  span {
    margin: 0 10px;
    font-size: 50px;
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }

  /* For Tablets */
  @media screen and (min-width: 540px) and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const ImgCobuildLab = styled.img`
  width: 260px;
`;

export const Img8Base = styled.img`
  width: 200px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;

  &:hover {
    animation-name: hoverButton;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`;

export const ButtonSignIn = styled(Button)`
  height: 50px;
  width: 180px;
  margin-top: 10px;
  background-color: #ff8439;
  font-size: 20px;
  font-weight: 600;
  color: white;

  @keyframes hoverButton {
    from {
      background-color: #ff8439;
    }
    to {
      background-color: #063c5e;
    }
  }
`;

export const ButtonSignOut = styled(Button)`
  height: 30px;
  width: 100px;
  background-color: #063c5e;
  font-size: 14px;
  color: white;
  font-weight: 600;

  @keyframes hoverButton {
    from {
      background-color: #063c5e;
    }
    to {
      background-color: #ff8439;
    }
  }
`;
