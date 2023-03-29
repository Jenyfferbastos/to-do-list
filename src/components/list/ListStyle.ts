import styled from "styled-components";
import { Button } from "../button/Button";

export const ListStyle = styled.div`
  background: rgba(217, 217, 217, 0.28);
  width: 46%;
  height: 80%;
  border-radius: 40px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    align-self: flex-end;
  }

  .ContainerCardList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    overflow-y: scroll;
    height: 70%;

  }
`;

