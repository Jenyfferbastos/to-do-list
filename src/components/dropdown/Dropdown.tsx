import { useState } from "react";
import { ContainerAdd, Input } from "./DropdownStyle";
import { GrAdd } from "react-icons/gr";
import { ButtonStyle } from "../button/ButtonStyle";

export const Dropdown = () => {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  return (
    <ContainerAdd>
      <ButtonStyle onClick={handleClick}>
        <GrAdd color="white" />
      </ButtonStyle>
      {showInput && (
        <>
          <Input type="text" /> 
        </>
      )}
    </ContainerAdd>
  );
};
