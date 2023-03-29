import { BackgroundImageStyle } from "./BackgroundImageStyle";
import background from "./../../assets/img/undraw_to_do_re_jaef.svg";

export function BackgroundImage(){
  return(
    <BackgroundImageStyle>
      <img src={background}  alt="" />
    </BackgroundImageStyle>
  )
}