import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

const FormNav = styled.form`
  display: inline;
  position: absolute;
  padding-left: 300px;
  margin: 1em 0 auto;
`;

let FormSeach = ({ handleSubmit, labelButton }) => {
  return (
    <FormNav onSubmit={handleSubmit}>
      <Field name='seach' component={Input} type='text' />
      <Button>{labelButton}</Button>
    </FormNav>
  );
};

export default (FormSeach = reduxForm({
  form: "formSeach"
})(FormSeach));
