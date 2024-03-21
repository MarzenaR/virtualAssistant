import { ErrorMessage, Formik } from "formik";
import { contactFormElements } from "../../../formElements/formElementsData";
import FormElement from "../../atoms/FormElement";
import Button from "../../atoms/Button";
import { contactUsFormValidationSchema } from "../../../validation/validationSchema";
import {
  FormElementWrapper,
  Label,
  Textarea,
} from "../../atoms/FormElement/StyledFormElement";
import { ContactForm } from "./StyledContact";

const Contact = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        surname: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={contactUsFormValidationSchema}
      onSubmit={async (values, actions) => {
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "post",
          body: JSON.stringify({
            service_id: "service_bdfnwod",
            template_id: "template_qjheop9",
            user_id: "rTGNMzIi6w2a7Gmsg",
            template_params: values,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });
        actions.resetForm();
        alert("Message sended succesfully!");
      }}
      enableReinitialize={true}
    >
      {(props) => (
        <ContactForm onSubmit={props.handleSubmit}>
          {contactFormElements.map((element) => (
            <FormElement
              key={element.inputName}
              inputName={element.inputName}
              inputType={element.inputType}
              labelContent={element.labelContent}
            />
          ))}
          <FormElementWrapper>
            <Label>Message</Label>
            <Textarea
              rows={7}
              name="message"
              id="message"
              value={props.values.message}
              onChange={props.handleChange}
            ></Textarea>
            <div className="error-wrapper">
              <ErrorMessage name="message" />
            </div>
          </FormElementWrapper>

          <Button type="submit">Send</Button>
        </ContactForm>
      )}
    </Formik>
  );
};

export default Contact;
