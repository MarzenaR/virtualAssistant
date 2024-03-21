import { Field } from "formik";
import styled, { css } from "styled-components";

interface Props {
  isCheckbox?: boolean;
}

export const FormElementWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin: 6px 0;

  ${({ isCheckbox }) =>
    isCheckbox &&
    css`
      flex-direction: row;
      align-items: center;
    `}

  .error-wrapper {
    color: red;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;

    @media (max-width: 900px) {
      width: 70vw !important;
    }
  }
`;

export const Input = styled(Field)`
  width: 350px;
  margin: 6px 0;
  padding: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;

  @media (max-width: 900px) {
    width: 70vw;
  }
`;

export const Textarea = styled.textarea`
  width: 350px;
  margin: 6px 0;
  padding: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;

  @media (max-width: 900px) {
    width: 70vw;
  }
`;

export const Label = styled.label`
  color: #3c3744;
  font-weight: 500;
`;
