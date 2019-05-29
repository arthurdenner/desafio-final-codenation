import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

const Form = styled.form`
  margin: 0 5em auto;
  position: relative;
  width: 100%;
  padding: 2em 0;
`;
const Button = styled.button`
  margin-left: 1em;
`;

const FormSeach = props => {
  const { handleSubmit, submitting } = props;
  return (
    <Form onSubmit={ e => {
        e.preventDefault();
        handleSubmit()
      }}>
      <Field
        name="name"
        component="input"
        type="text"
        placeholder="Digite o nome do usuário"
      />
      <Button type="submit" disabled={submitting}>
        Procurar
      </Button>
    </Form>
  );
};

export default reduxForm({
  form: "formSeach",
  destroyOnUnmount: false
})(FormSeach);
