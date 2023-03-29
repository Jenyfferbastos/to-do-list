import { PropsWithChildren } from "react";
import { ContainerStyle } from "./ContainerStyle";

export function Container(props: PropsWithChildren){
  return(
    <>
    <ContainerStyle>
      {props.children}
    </ContainerStyle>
    </>
  )
}