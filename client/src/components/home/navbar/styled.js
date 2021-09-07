import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  height: 64px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  span {
    margin: 0 5px;
    font-size: 30px;
  }
`;

export const ImgCobuildLab = styled.img`
  width: 160px;
`;

export const Img8Base = styled.img`
  width: 100px;
`;
