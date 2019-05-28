import React from "react";
import styled from "styled-components";
import imgGitHub from "../../img/gitHub.svg";

const NavDefault = styled.nav`
  width: 100%;
  border-radius: 0.3em;
  background-color: #3f403f;
  position: absolute;
  margin: 0 auto;
`;

const Img = styled.img`
  margin: 0 auto;
  padding: 1em;
  border-radius: 0.7em;
  display: inline;
`;

let Nav = () => (
  <NavDefault>
    <Img src={imgGitHub} alt='image gitHub' />
  </NavDefault>
);

export default Nav;
