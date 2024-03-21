import { Link } from "react-router-dom";

export const loginFormElements = [
  {
    inputName: "email",
    inputType: "email",
    labelContent: "Email",
  },
  {
    inputName: "password",
    inputType: "password",
    labelContent: "Password",
  },
];

export const registerFormElements = [
  {
    inputName: "firstName",
    inputType: "text",
    labelContent: "First Name",
  },
  {
    inputName: "surname",
    inputType: "text",
    labelContent: "Surname",
  },
  {
    inputName: "companyName",
    inputType: "text",
    labelContent: "Company name",
  },
  {
    inputName: "email",
    inputType: "email",
    labelContent: "Email",
  },
  {
    inputName: "password",
    inputType: "password",
    labelContent: "Password",
  },
  {
    inputName: "confirmPassword",
    inputType: "password",
    labelContent: "Confirm Password",
  },

  {
    inputName: "contactNumber",
    inputType: "number",
    labelContent: "Contact number",
  },

  {
    inputName: "acceptTerms",
    inputType: "checkbox",
    labelContent: <Link to="/">Acceptance of Terms of Service</Link>,
  },
];

export const contactFormElements = [
  {
    inputName: "firstName",
    inputType: "text",
    labelContent: "First Name",
  },
  {
    inputName: "surname",
    inputType: "text",
    labelContent: "Surname",
  },
  {
    inputName: "companyName",
    inputType: "text",
    labelContent: "Company name",
  },
  {
    inputName: "email",
    inputType: "email",
    labelContent: "Email",
  },
  {
    inputName: "phone",
    inputType: "tel",
    labelContent: "Phone",
  },
];
