import { Formik } from "formik";
import { registerFormElements } from "../../atoms/formElements/formElementsData";
import FormElement from "../../atoms/FormElement";
import Button from "../../atoms/Button";
import { registerFormValidationSchema } from "../../../validation/validationSchema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, usersCollection } from "../../../firebase";
import { addDoc } from "firebase/firestore";
import { useModal } from "../../../contexts/Modal";

interface FormFieldsInterface {
  firstName: string;
  surname: string;
  companyName: string;
  email: string;
  password?: string;
  contactNumber: string;
  confirmPassword?: string;
  acceptTerms?: boolean;
}

const Register = () => {
  const { closeModal } = useModal();

  const handleRegistration = async (values: FormFieldsInterface) => {
    try {
      const firebaseUser = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password as string
      );

      const dbUserObject = { ...values, id: firebaseUser.user.uid };
      delete dbUserObject.password;
      delete dbUserObject.confirmPassword;
      delete dbUserObject.acceptTerms;

      await addDoc(usersCollection, dbUserObject);

      alert("Registration successfull!");

      closeModal();
    } catch (e) {
      alert("Somethink went wrong!");
    }
  };

  return (
    <Formik
      validationSchema={registerFormValidationSchema}
      onSubmit={handleRegistration}
      initialValues={{
        firstName: "",
        surname: "",
        companyName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
        acceptTerms: false,
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          {registerFormElements.map((el, index) => (
            <>
              <FormElement
                key={index}
                inputName={el.inputName}
                inputType={el.inputType}
                labelContent={el.labelContent}
              />
            </>
          ))}

          <Button type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  );
};

export default Register;
