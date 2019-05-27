import React from "react";
import styled from "styled-components";
import imgGitHub from "../../img/gitHub.svg";

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

let Nav = () => (
  <NavDefault>
    <Img src={imgGitHub} alt='image gitHub' />
  </NavDefault>
);

export default Nav;
