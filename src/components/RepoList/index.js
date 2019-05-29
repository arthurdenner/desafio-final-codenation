import React from "react";
import styled from "styled-components";

const RepoListStyle = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #f2f2f2;
  left: 300px;
  padding-top: 100px
  overflow-x: hidden;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReposData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 0;
  display: block;
  margin-block-end: 1em;
  margin-inline-start: 1em;
  margin-inline-end: 0px;
  text-align: left;
`;

const H4 = styled.h4`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 0;
  display: block;
  margin-inline-start: 1em;
  margin-inline-end: 0px;
  text-align: left;
`;

const P = styled.p`
  margin-top: 0;
  display: inline-block !important;
  color: #586069 !important;
  margin-inline-start: ${props => props.date ? '2em' : '0'}
  margin-inline-end: 0px;
  list-style: none;
  text-align: center;
`;

const Li = styled.li`
  list-style-type: none;
`

const Img = styled.img`
  width: 280px;
  border-radius: 50%;
`;

let RepoList = props => {
  const repos = props.repositories
  return(
  <div>
    {repos.length > 0 && (<RepoListStyle>
      <H3>Repositories List</H3>
      <ul>
        {repos && repos.map(r=>{
          return(
            <Li key={r.id}>
              <H4>{r.name} <P><b>({r.language})</b></P></H4>
              <P date>Created at: <b>{r.created_at}</b></P>
            </Li>)})}
      </ul>
    </RepoListStyle>)}
  </div>
)};

export default (RepoList);
