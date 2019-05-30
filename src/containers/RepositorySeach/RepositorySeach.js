import React from "react";
import { connect } from "react-redux";
import RepositorySeachItem from "../../components/RepositorySeachItem/";
import RepoList from "../../components/RepoList/";
import Nav from "../../components/Nav/";
import { fetchSearchRepos } from "../../redux/actions";
import { bindActionCreators } from "redux";

class RepositorySeach extends React.Component {
  handleSubmit = e => {
    this.props.fetchSearchRepos(e.name);
  };

  render() {
    return (
      <div>
        <Nav onSubmit={this.handleSubmit} placeholder='Find by language'/>
        <RepoList
          repositories={this.props.repos.repos.items || []}
          onChangeRepo={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUserData,
  repos: state.reposSearch
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchSearchRepos: fetchSearchRepos },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositorySeach);
