import React from "react";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainersRepository = styled.div`
  width: 100%;
  float: left !important;
  padding-left: 8px !important;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
`;

const Ul = styled.ul`
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  position: relative;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const Li = styled.li`
  position: relative;
  display: flex !important;
  flex-direction: column !important;
  padding-bottom: 24px !important;
  padding-top: 24px !important;
  justify-content: flex-start !important;
  text-align: -webkit-match-parent;

  border-bottom: 1px solid #eee;
  list-style: none;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const CadaRepositorio = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  list-style: none;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const P = styled.p`
  width: 100%;
  margin-top: 0;
  display: inline-block !important;
  padding-right: 24px !important;
  margin-bottom: 8px !important;
  color: #586069 !important;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  list-style: none;
`;

const LicencaEUpdate = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
`;

const PLicencaEUpdate = styled.p`
  font-size: 12px !important;
  margin-right: 16px !important;
  margin-top: 8px !important;
  margin-bottom: 0 !important;
  color: #586069 !important;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Paginate = styled.div`
  display: flex !important;
  margin-bottom: 15px;
  margin-top: 20px;
  text-align: center;
`;

const LinguagemProgramacao = styled.div`
  display: flex !important;
  padding-top: 8px !important;
  flex-shrink: 0 !important;
  width: 50%;
`;

const RepositorySeachItem = () => (
  <div>
    {/* <Nav /> */}
    <ContainersRepository>
      <Ul>
        <Li>
          <CadaRepositorio>
            <Link to={"/"}>
              <H3>Nome do usuario</H3>
            </Link>
            <P>Descrição do repositório</P>
            <LicencaEUpdate>
              <PLicencaEUpdate>Licença</PLicencaEUpdate>
              <PLicencaEUpdate>Ultimo UPDATE</PLicencaEUpdate>
            </LicencaEUpdate>
            <LinguagemProgramacao>
              <p>Linguagen de Programação</p>
            </LinguagemProgramacao>
          </CadaRepositorio>
        </Li>
      </Ul>
      <Paginate>
        <Button>Proximo</Button>
        <Button>Anterior</Button>
      </Paginate>
    </ContainersRepository>
  </div>
);

export default RepositorySeachItem;
