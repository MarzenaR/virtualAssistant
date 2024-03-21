import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export const ContactPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 100px;
  gap: 50px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactImage = styled.img`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 20px;
  border-radius: 2%;
`;

export const ContactText = styled.div`
  text-align: justify;
`;

export const ContactTextHeader = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

export const ContactTextDescription = styled.p`
  text-align: center;
  line-height: 30px;
`;

export const ContactTextIcon = styled(IoLogoWhatsapp)`
  color: #25d366;
  font-size: 28px;
`;

export const ContactTwoItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactItemData = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  font-size: 18px;
  justify-content: center;

  a {
    text-decoration: none;
    color: #3c3744;
  }
`;

export const ContactPhoneIcon = styled(FaPhoneAlt)`
  font-size: 28px;
`;

export const ContactEmailIcon = styled(MdMail)`
  font-size: 28px;
`;

export const ContactFbIcon = styled(FaFacebook)`
  font-size: 28px;
  color: #4267b2;
`;

export const ContactInstagramIcon = styled.img`
  width: 31px;
`;

export const ContactTiktokIcon = styled.img`
  width: 25px;
`;
