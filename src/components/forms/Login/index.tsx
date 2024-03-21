import { Formik } from "formik";
import { loginFormElements } from "../../atoms/formElements/formElementsData";
import FormElement from "../../atoms/FormElement";
import Button from "../../atoms/Button";
import { loginFormValidationSchema } from "../../../validation/validationSchema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useModal } from "../../../contexts/Modal";

interface FormFieldsInterface {
  email: string;
  password: string;
}

const Login = () => {
  const { closeModal } = useModal();

  const handleLogin = async (values: FormFieldsInterface) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password as string
      );
      closeModal();
    } catch (e) {
      alert("Somethink went wrong!");
    }
  };

  return (
    <Formik
      //   validationSchema={loginFormElements}
      onSubmit={handleLogin}
      initialValues={{ email: "", password: "" }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          {loginFormElements.map((el, index) => (
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

export default Login;
