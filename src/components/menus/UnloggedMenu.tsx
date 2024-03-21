import {
  MenuWrapper,
  MenuLinks,
  MenuLinkItem,
  MenuLink,
  AuthButtonsWrapper,
  MenuNav,
} from "./StyledMenu";
import Button from "../atoms/Button";
import { useModal } from "../../contexts/Modal";

const UnloggedMenu = () => {
  const { openModal } = useModal();

  return (
    <MenuWrapper>
      <MenuNav>
        <MenuLinks>
          <MenuLinkItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuLinkItem>
          <MenuLinkItem>
            <MenuLink to="/book-service">Book service</MenuLink>
          </MenuLinkItem>
          <MenuLinkItem>
            <MenuLink to="/contact-us">Contact</MenuLink>
          </MenuLinkItem>
        </MenuLinks>
      </MenuNav>
      <AuthButtonsWrapper>
        <Button onClick={() => openModal("login")}>Login</Button>
        <Button onClick={() => openModal("register")}>Register</Button>
      </AuthButtonsWrapper>
    </MenuWrapper>
  );
};

export default UnloggedMenu;
