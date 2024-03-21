import UnloggedMenu from "../../menus/UnloggedMenu";
import {
  HeaderWrapper,
  Logo,
  HeaderImgWrapper,
  HeaderLink,
  LinksWrapper,
  IconWrapper,
} from "./StyledHeader";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useUser } from "../../../contexts/User";
import LoggedMenu from "../../menus/LoggedMenu";
import logo from "../../../assets/images/logoZoomVA.png";
import headerImg from "../../../assets/images/clock-money-tree.jpg";

const Header = () => {
  const { isLogged } = useUser();

  return (
    <>
      <HeaderWrapper>
        <Logo src={logo} />

        <LinksWrapper>
          <HeaderLink href="tel:123123123">
            <IconWrapper>
              <FaPhoneAlt />
            </IconWrapper>
            07999123123
          </HeaderLink>
          <HeaderLink href="mailto:a@a.pl">
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            zoom@gmail.com
          </HeaderLink>
        </LinksWrapper>
      </HeaderWrapper>
      {isLogged ? <LoggedMenu /> : <UnloggedMenu />}
    </>
  );
};

export default Header;
