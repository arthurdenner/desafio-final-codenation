import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const UserProfileStyle = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  background-color: #e2e2e2;
  left: 0;
  padding-top: 100px
  overflow-x: hidden;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  font-weight: bold;
  text-align: center;
`;

const ErrorDiv = styled.div`
  font-weight: bold;
  text-align: center;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 0;
  margin-block-start: 1em;
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
`;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 0;
  display: block;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
`;

const P = styled.p`
  margin-top: 0;
  display: inline-block !important;
  padding-right: 24px !important;
  margin-bottom: 8px !important;
  color: #586069 !important;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  list-style: none;
  text-align: center;
`;

const Img = styled.img`
  width: 280px;
  border-radius: 50%;
`;

let UserProfile = props => {
  const { user, form } = props
  let submit;
  try { 
    submit = form.submitSucceeded 
  }
  catch{
    submit = false
  }
  return(
  <UserProfileStyle>
    <Loading>{user.isFetching && submit && 'Loading...'}</Loading>
    <ErrorDiv>{!user.isFetching && submit && !user.userData.data && 'Não foi possível encontrar...'}</ErrorDiv>
    {!user.isFetching && submit && user.userData.data && (
      <UserData>
        <Img src={user.userData.data.avatar_url}></Img>
        <H2>{user.userData.data.name}</H2>
        <H3><a href={user.userData.data.html_url} target='_blank' rel='noopener noreferrer'>{user.userData.data.login}</a></H3>
        <P>Location: <b>{user.userData.data.location}</b></P>
        <P>Following: <b>{user.userData.data.followers}</b></P>
        <P>Followers: <b>{user.userData.data.following}</b></P>
        <P>Public Repositories: <b>{user.userData.data.public_repos}</b></P>
      </UserData>
    )}
  </UserProfileStyle>
)};

const mapStateToProps = state => ({
  user: state.currentUserData,
  repos: state.userRepos,
  form: state.form.formSearch
});

export default connect(mapStateToProps)(UserProfile);
