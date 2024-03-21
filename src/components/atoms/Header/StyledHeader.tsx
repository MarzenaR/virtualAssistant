import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 25px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #d5c7bc; */
  background-color: #f8f6f6;

  @media (max-width: 900px) {
    display: block;
    text-align: center;
    padding: 25px 50px;
  }
`;

export const Logo = styled.img`
  max-width: 200px;
`;

export const HeaderImgWrapper = styled.img`
  max-width: 200px;
  border-radius: 70%;
`;

export const LinksWrapper = styled.div`
  display: grid;
  gap: 20px;
  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const HeaderLink = styled.a`
  display: flex;
  gap: 15px;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  color: #3c3744;
`;

export const IconWrapper = styled.span`
  color: #4f9b5a;
`;
