import React from "react";
import { connect } from "react-redux";
import Nav from "../../components/Nav/";
import UserProfile from "../../components/UserProfile/";
import RepoList from "../../components/RepoList/";
import { fetchUserAndRepos } from "../../redux/actions";
import { bindActionCreators } from 'redux'

class Home extends React.Component {
  state = {
  };
  handleSubmit = e => {
    this.props.fetchUserAndRepos(e.name)
    console.log(e)
  };

  render() {
    return (
      <div>
        <Nav onSubmit={this.handleSubmit}/>
        <UserProfile />
        <RepoList repositories={this.props.repos.repos.data || []} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUserData,
  repos: state.userRepos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators( { fetchUserAndRepos: fetchUserAndRepos } , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
