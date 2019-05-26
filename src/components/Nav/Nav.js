import React from "react";
import styled from "styled-components";
import imgGitHub from "../../img/gitHub.svg";
import { Field, reduxForm } from "redux-form";
import Input from "../Input/Input";
import Button from "../Button/Button";

const NavDefault = styled.nav`
  margin: 0 auto;
  width: 100%;
  background-color: #3f403f;
  position: absolute;
`;

const Img = styled.img`
  margin: 1em auto;
  border-radius: 0.7em;
  display: inline;
`;

const Form = styled.form`
  display: inline;
  position: absolute;
  padding-left: 300px;
  margin: 1em 0 auto;
`;

let Nav = handleSubmit => (
  <NavDefault>
    <Img src={imgGitHub} alt='image gitHub' />
    <Form onSubmit={handleSubmit}>
      <Field
        name='search'
        placeholder='Buscar Repositório'
        type='text'
        component={Input}
      />
      <Button>OK</Button>
    </Form>
  </NavDefault>
);

Nav = reduxForm({ form: "nav" })(Nav);

export default Nav;
