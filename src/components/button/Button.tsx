import { PropsWithChildren } from "react";
import { ButtonStyle } from "./ButtonStyle";

export function Button(props: PropsWithChildren) {
  return (
    <ButtonStyle>{props.children}</ButtonStyle>
  )
}