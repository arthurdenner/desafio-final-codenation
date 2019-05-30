import React from "react";
import styled from "styled-components";
import RepoDetails from '../RepoDetails/'
import { connect } from "react-redux";
import { selectedRepo, fetchEventsData } from "../../redux/actions";
import { bindActionCreators } from 'redux'

const RepoListStyle = styled.div`
  height: 100%;
  width: 120%;
  position: fixed;
  left: 300px;
  top: 0;
  padding-top: 100px
  overflow-x: hidden;
  display: block;
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
  margin-inline-start: ${props => props.date ? '2em' : '0'}
  margin-inline-end: 0px;
  list-style: none;
  text-align: center;
`;

let formatDate = date => {
  var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  let x = new Date(date).toLocaleDateString('en-US', dateOptions)
  return x
}


let RepoList = props => {
  const repos = props.repositories
  const repo = props.repo
  const selectRepo = props.selectRepo
  const onChangeRepo = props.onChangeRepo
  const events = props.events
  
  let changeRepo = id => {
    selectRepo(id)
    const r = repos.filter(r=>(r.id === id))[0]
    onChangeRepo(r.owner.login, r.name)
  }

  return(
  <div>
    {repos.length > 0 && (<RepoListStyle>
      <H3>Repositories List</H3>
      <ul>
        {repos && repos.map(r=>{
          return(
            <Li selected={repo === r.id} key={r.id} onClick={() => changeRepo(r.id)}>
              <H4>{r.name} <P><b>({r.language})</b></P></H4>
              <P date>Forks: <b>{r.forks}</b></P>
              <P date>Stars: <b>{r.stargazers_count}</b></P>
              <P date>Created at: <b>{formatDate(r.created_at)}</b></P>
            </Li>)})}
      </ul>
      <P date>Click on card to view events</P>
      {repo !== 0 && events.data && (<RepoDetails events={events.data}/>)}
    </RepoListStyle>)}
  </div>
)};

const mapStateToProps = state => ({
  repo: state.selectedRepo.selectedRepo,
  events: state.currentEventsData.eventsData,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators( { 
    selectRepo: selectedRepo, 
    fetchEventsData: fetchEventsData,
  } , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
