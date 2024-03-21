import React from "react";
import { ErrorMessage } from "formik";
import { FormElementWrapper, Input, Label } from "./StyledFormElement";

interface Props {
  inputName: string;
  inputType: string;
  labelContent: string | JSX.Element;
  isDisabled?: boolean;
  isTextarea?: boolean;
  isCheckbox?: boolean;
}

const FormElement = ({
  inputName,
  inputType = "text",
  labelContent,
  isDisabled = false,
  isCheckbox = false,
}: Props) => {
  const renderFormElementContent = () => {
    switch (inputType) {
      case "password":
        return (
          <>
            <Label htmlFor={inputName}>{labelContent}</Label>
            <div className="password-wrapper">
              <Input
                isCheckbox={isCheckbox}
                name={inputName}
                id={inputName}
                type={inputType}
              />
            </div>
          </>
        );

      case "checkbox":
        return (
          <div className="checkbox-wrapper">
            <Label htmlFor={inputName}>{labelContent}</Label>
            <Input
              isCheckbox={isCheckbox}
              style={{ width: "auto" }}
              name={inputName}
              id={inputName}
              type={inputType}
            />
          </div>
        );

      case "textarea":
        return (
          <>
            <Label htmlFor={inputName}>{labelContent}</Label>
            <Input
              as="textarea"
              name={inputName}
              id={inputName}
              disabled={isDisabled}
            />
          </>
        );

      default:
        return (
          <>
            <Label htmlFor={inputName}>{labelContent}</Label>
            <Input
              name={inputName}
              id={inputName}
              type={inputType}
              disabled={isDisabled}
            />
          </>
        );
    }
  };

  return (
    <FormElementWrapper>
      {renderFormElementContent()}
      <div className="error-wrapper">
        <ErrorMessage name={inputName} />
      </div>
    </FormElementWrapper>
  );
};

export default FormElement;
