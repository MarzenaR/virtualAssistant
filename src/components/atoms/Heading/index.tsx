import React from "react";
import { StyledH1, StyledH2, StyledH3 } from "./StyledHeading";

interface Props{
  headingType: string;
  children: JSX.Element | string | number;
  color?: string;
}

const Heading = ({ headingType, children, color }: Props) => {
  const renderHeading = () => {
    switch (headingType) {
      case "h1":
        return <StyledH1 color={color}>{children}</StyledH1>;
      case "h2":
        return <StyledH2 color={color}>{children}</StyledH2>;
      case "h3":
        return <StyledH3 color={color}>{children}</StyledH3>;
      default:
        return <StyledH3 color={color}>{children}</StyledH3>;
    }
  };

  return <>{renderHeading()}</>;
};

export default Heading;
