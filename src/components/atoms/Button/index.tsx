import React from "react";
import { mainTheme } from "../../../globalStyles/Themes/mainTheme";
import { StyledButton } from "./StyledButton";

interface Props {
  children: JSX.Element | string;
  bgColor?: string;
  onClick?(): any;
  type?: "button" | "submit";
}

const Button = ({ children, bgColor = "#3c3744", onClick, type }: Props) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
