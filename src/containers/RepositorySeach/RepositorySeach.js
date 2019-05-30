import React from "react";
import { connect } from "react-redux";
import RepoList from "../../components/RepoList/";
import Nav from "../../components/Nav/";
import SearchDetails from '../../components/SearchDetails'
import { fetchSearchRepos, fetchEventsData } from "../../redux/actions";
import { bindActionCreators } from "redux";

class RepositorySeach extends React.Component {
  handleSubmit = e => {
    this.props.fetchSearchRepos(`language%3A${e.name}&sort=stars`);
  };
  
  handleChange = (a,b) => {
    this.props.fetchEventsData(a,b)
  }

  render() {
    return (
      <div>
        <Nav onSubmit={this.handleSubmit} placeholder='Find by language' to='User Login' linkTo='/'/>
        <SearchDetails />
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
    { fetchSearchRepos: fetchSearchRepos, fetchEventsData: fetchEventsData },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositorySeach);
