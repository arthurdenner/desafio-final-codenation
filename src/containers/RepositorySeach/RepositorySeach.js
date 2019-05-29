import React from "react";
import RepositorySeachItem from "../../components/RepositorySeachItem/RepositorySeachItem";
import { connect } from "react-redux";
import Nav from "../../components/Nav";
import RepoList from "../../components/RepoList/";
import { searchRepos } from "../../redux/actions";
import { bindActionCreators } from "redux";

class RepositorySeach extends React.Component {
  state = {};

  handleSubmit = e => {
    this.props.searchRepos(e.name);
    console.log(e);
  };

  render() {
    return (
      <div>
        <Nav onSubmit={this.handleSubmit} />
        <RepositorySeachItem />
        <RepoList repositories={this.props.repos.repos.data || []} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUserData,
  repos: state.userRepos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchRepos: searchRepos }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositorySeach);
