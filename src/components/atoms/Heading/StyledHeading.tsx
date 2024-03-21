import styled from "styled-components";

interface Props{
      color?: string;
      theme: {
            colors: {
                  main: string
            }
      }
}

export const StyledH1 = styled.h1<Props>`
  text-align: center;
  padding: 0 20px;
  color: ${({ color, theme }) => (color ? color : theme.colors.main)};
`;
export const StyledH2 = styled.h2<Props>`
  color: ${({ color, theme }) => (color ? color : theme.colors.main)};
`;
export const StyledH3 = styled.h3<Props>`
  color: ${({ color, theme }) => (color ? color : theme.colors.main)};
  font-size: 24px;
`;
