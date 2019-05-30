import React from "react";
import styled from "styled-components";
import imgGitHub from "../../img/gitHub.svg";
import { Link } from 'react-router-dom'
import FormSeach from "../../components/FormSeach/";

const NavStyle = styled.nav`
  overflow: hidden;
  background-color: #3f403f;
  position: fixed;
  margin: 0;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Img = styled.img`
  margin: 0 auto;
  padding: 1em;
  border-radius: 0.7em;
  display: inline;
`;

let Nav = props => {
  return(
  <NavStyle>
    <Link to='/'>
      <Img src={imgGitHub} alt='image gitHub' />
    </Link>
    <FormSeach onSubmit={props.onSubmit} placeholder={props.placeholder}/>
  </NavStyle>
)};

export default Nav;
