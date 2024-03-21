import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string()
    .required("Enter password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 char, one uppercase, one number, one special char"
    ),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  reset_email: Yup.string().email("Invalid email").required("Enter your email"),
});

interface RegisterFormValidationSchemaInterface {
  firstname: Yup.StringSchema;
  surname: Yup.StringSchema;
  companyName: Yup.StringSchema;
  email: Yup.StringSchema;
  password: Yup.StringSchema;
  contactNumber: Yup.StringSchema;
  confirmPassword: Yup.StringSchema;
}

export const registerFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter firstname"),
  surname: Yup.string().required("Enter surname"),
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string()
    .required("Enter password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 char, one uppercase, one number, one special char"
    ),
  contactNumber: Yup.string().required("Enter phone"),
  confirmPassword: Yup.string()
    .required("Enter confirm password")
    .oneOf([Yup.ref("password")], "Password doesn't match"),
  //   acceptTerms: Yup.bool().oneOf([true], "You must accept terms"),
});

export const contactUsFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter surname"),
  surname: Yup.string().required("Enter surname"),
  email: Yup.string().email().required("Enter email"),
  message: Yup.string().required("Enter message"),
});
