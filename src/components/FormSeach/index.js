/* eslint-disable */

import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";

const textStyle = {
  width: "400px",
  height: "30px",
  padding: "10 0px",
  fontSize: "1.2em",
  margin: "0 auto",
  borderRadius: "0.3em"
};

const Form = styled.form`
  margin: 0 5em auto;
  position: fixed;
  width: 100%;
  height: 72px;
  top: 0;
  padding: 21px;
`;

const Button = styled.button`
  color: tomato;
  margin-left: 20px;
  font-size: 1em;
  border: 2px solid wheat;
  border-radius: 0.5em;
  width: 100px;
  height: 30px;

  :hover {
    background: wheat;
    border: 2px solid tomato;
    font-weight: bold;
  }
`;

const FormSearch = props => {
  const { handleSubmit, submitting } = props;
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Field
        style={textStyle}
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
  form: "formSearch",
  destroyOnUnmount: false
})(FormSearch);
