import React from "react";
import styled from "styled-components";

const InputDefault = styled.input`
  width: 400px;
  height: 25px;
  padding: 10 0px;
  font-size: 1.2em;
  margin: 0 auto;
  border-radius: 0.3em;
`;

const Input = ({ name, placeholder, onChange }) => (
  <InputDefault
    name={name}
    placeholder={placeholder}
    type='text'
    onChange={onChange}
  />
);

export default Input;
