import React from 'react';
import styled from "styled-components";

const RepoDetailsStyle = styled.div`
  height: 100%;
  width: 120%;
  position: fixed;
  left: 700px;
  top: 0;
  padding-top: 100px;
  overflow-x: hidden;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 0;
  display: block;
  margin-block-end: 1em;
  margin-inline-start: 1em;
  margin-inline-end: 0px;
  text-align: left;
`;

const H4 = styled.h4`
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 0;
  display: block;
  margin-inline-start: 1em;
  margin-inline-end: 0px;
  text-align: left;
`;

const Li = styled.li`
  margin: 10px;
  padding-top: 10px;
  width: 300px;
  list-style-type: none;
  box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);
  transition 0.3s;
  border-radius: 5px;
  background-color: ${props => props.selected ? '#d2ffd1' : 'white' };
  :hover {
    background-color: #fffee8;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const P = styled.p`
  margin-top: 0;
  display: inline-block !important;
  color: #586069 !important;
  margin-inline-start: 0;
  margin-inline-end: 0;
  margin-block-end: ${props => props.date ? '1em' : '0'};
  list-style: none;
`;

let formatDate = date => {
  var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  let x = new Date(date).toLocaleDateString('en-US', dateOptions)
  return x
}

let RepoDetails = props => {
  const events = props.events
    return(
    <RepoDetailsStyle>
      {events.length > 0 && <H3>Events List</H3>}
      <ul>
        {events.map((e)=> (
          <Li key={e.id}>
            <H4>event: <b>{e.type}</b></H4>
            <ul>
              <P>user: {e.actor.login}</P>
              <P date>date: {formatDate(e.created_at)}</P>
            </ul>
          </Li>
        ))}
      </ul>
    </RepoDetailsStyle>)
};

export default RepoDetails;
