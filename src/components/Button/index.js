import React from "react";
import styled from "styled-components";

const ButtonDefault = styled.button`
  color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid wheat;
  border-radius: 0.5em;
  width: 85px;
  height: 25px;
`;

const Button = props => <ButtonDefault>{props.text}</ButtonDefault>;

export default Button;
