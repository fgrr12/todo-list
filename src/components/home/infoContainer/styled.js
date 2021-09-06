import styled from "styled-components";
import { TiEdit } from "react-icons/ti";
import { TiTrash } from "react-icons/ti";

export const Container = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: white;
  display: flex;
  border-radius: 10px;
`;

export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  overflow-x: none;
`;

export const UlData = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 4fr) minmax(0, 7fr) minmax(0, 3fr)
    minmax(0, 3fr) minmax(0, 2fr) minmax(0, 2fr) minmax(0, 2fr);
  column-gap: 5px;
  justify-items: center;
  width: 100%;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Li = styled.li`
  display: grid;
  grid-template-columns:
    minmax(0, 4fr) minmax(0, 7fr) minmax(0, 3fr)
    minmax(0, 3fr) minmax(0, 2fr) minmax(0, 2fr) minmax(0, 2fr);
  column-gap: 5px;
  justify-items: center;
  margin-bottom: 10px;
  background-color: rgba(49, 124, 170, 0.5);
  border-radius: 5px;
  padding: 14px 0;

  label {
    width: 100%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const EditImg = styled(TiEdit)`
  font-size: 24px;
  cursor: pointer;

  &:hover {
    animation-name: hoverImg;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes hoverImg {
    from {
      color: black;
    }
    to {
      color: #e86615;
    }
  }
`;

export const TrashImg = styled(TiTrash)`
  font-size: 24px;
  cursor: pointer;

  &:hover {
    animation-name: hoverImg;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`;
