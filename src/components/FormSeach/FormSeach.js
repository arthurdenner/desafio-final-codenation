import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

const Form = styled.form`
  margin: 0 5em auto;
  position: relative;
  width: 100%;
  padding: 2em 0;
`;

const FormSeach = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name='name'
        component='input'
        type='text'
        placeholder='Nome do repositórios'
      />
    </Form>
  );
};

export default reduxForm({
  form: "FormSeach"
})(FormSeach);
