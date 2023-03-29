import styled from "styled-components";

export const TaskStyle = styled.div`
  width: 90%;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.39);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 15px;
`;

export const TextTask = styled.p`
  display: flex;
  font-size: 16px;
  color: black;
  position: initial;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 26%;

`;
