import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrapper = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: #8f91a2;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    padding: 20px 50px;
  }
`;

export const MenuNav = styled.nav`
  @media (max-width: 900px) {
    order: 2;
    width: 100%;
  }
`;

export const MenuLinks = styled.ul`
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    order: 1;
    width: 100%;
    margin-top: 20px;
    justify-content: center;
  }
`;

export const MenuLinkItem = styled.li``;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  color: #3c3744;

  &:hover {
    font-weight: bold;
    font-size: 22px;
  }
  &.active {
    color: white;
    /* color: #4f9b5a; */
    font-weight: bold;
    font-size: 22px;
  }
`;

export const AuthButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;
