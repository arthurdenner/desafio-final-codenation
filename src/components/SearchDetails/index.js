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

const SearchData = styled.div`
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

let UserProfile = props => {
  const { repos, form } = props
  let submit;
  try { 
    submit = form.submitSucceeded 
  }
  catch{
    submit = false
  }
  
  return(
  <UserProfileStyle>
    <Loading>{repos.isFetching && submit && 'Loading...'}</Loading>
    <ErrorDiv>{!repos.isFetching && submit && !repos.repos.items && 'Não foi possível encontrar...'}</ErrorDiv>
    {!repos.isFetching && submit && repos.repos.items && (
      <SearchData>
        <H2>{repos.repos.total_count} Found Repositories</H2>
        <H3>Listing Top 30 Stars</H3>
      </SearchData>
    )}
  </UserProfileStyle>
)};

const mapStateToProps = state => ({
  repos: state.reposSearch,
  form: state.form.formSearch
});

export default connect(mapStateToProps)(UserProfile);
