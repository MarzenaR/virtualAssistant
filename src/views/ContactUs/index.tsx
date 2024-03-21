import Contact from "../../components/forms/Contact";
import {
  ContactPageWrapper,
  ContactText,
  ContactImage,
  ContactTextHeader,
  ContactTextDescription,
  ContactTextIcon,
  ContactItemData,
  ContactPhoneIcon,
  ContactEmailIcon,
  ContactFbIcon,
  ContactInstagramIcon,
  ContactTiktokIcon,
  ContactTwoItems,
} from "./ContactUsStyled";
import contactUsImage from "../../assets/images/contact-us.jpg";
import instagramImage from "../../assets/images/insta_logo.png";
import tiktokImage from "../../assets/images/tiktok_logo.png";

const ContactUs = () => {
  return (
    <ContactPageWrapper>
      <ContactText>
        <ContactImage src={contactUsImage} />
        <ContactTextHeader>Feel free to request a call back!</ContactTextHeader>
        <ContactTextDescription>
          Instead of submitting this form, it can be faster to get in contact
          via our <br /> WhatsApp <ContactTextIcon /> +44 7999 123123.
        </ContactTextDescription>
        <ContactTwoItems>
          <ContactItemData>
            <ContactPhoneIcon />
            <a href="tel: +44 7999 123123">+44 7999 123123</a>
          </ContactItemData>
          <ContactItemData>
            <ContactEmailIcon />
            <a href="mailto:zoom@gmail.com">zoom@gmail.com</a>
          </ContactItemData>
        </ContactTwoItems>

        <ContactItemData>
          <ContactFbIcon />
          <a href="#">zoom virtual assistant</a>
        </ContactItemData>
        <ContactItemData>
          <ContactInstagramIcon src={instagramImage} />
          <a href="#">zoom virtual assistant</a>
        </ContactItemData>
        <ContactItemData>
          <ContactTiktokIcon src={tiktokImage} />
          <a href="#">zoom virtual assistant</a>
        </ContactItemData>
      </ContactText>
      <Contact />
    </ContactPageWrapper>
  );
};

export default ContactUs;
