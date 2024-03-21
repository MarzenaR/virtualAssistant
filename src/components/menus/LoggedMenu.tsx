import {
  MenuWrapper,
  MenuLinks,
  MenuLinkItem,
  MenuLink,
  AuthButtonsWrapper,
} from "./StyledMenu";
import Button from "../atoms/Button";
import { useUser } from "../../contexts/User";

const LoggedMenu = () => {
  const { logout } = useUser();

  return (
    <MenuWrapper>
      <nav>
        <MenuLinks>
          <MenuLinkItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuLinkItem>
          <MenuLinkItem>
            <MenuLink to="/booking-history">History</MenuLink>
          </MenuLinkItem>
          <MenuLinkItem>
            <MenuLink to="/contact-us">Contact</MenuLink>
          </MenuLinkItem>
        </MenuLinks>
      </nav>
      <AuthButtonsWrapper>
        <Button onClick={() => logout()}>Logout</Button>
      </AuthButtonsWrapper>
    </MenuWrapper>
  );
};

export default LoggedMenu;
