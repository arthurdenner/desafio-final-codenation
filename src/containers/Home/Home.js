import React from "react";
import { connect } from "react-redux";
import Nav from "../../components/Nav/";
import UserProfile from "../../components/UserProfile/";
import RepoList from "../../components/RepoList/";
import { fetchUserAndRepos, fetchEventsData } from "../../redux/actions";
import { bindActionCreators } from "redux";

class Home extends React.Component {
  handleSubmit = e => {
    this.props.fetchUserAndRepos(e.name);
  };

  handleChange = (a,b) => {
    this.props.fetchEventsData(a,b)
  }

  render() {
    return (
      <div>
        <Nav onSubmit={this.handleSubmit} placeholder='Find by username'/>
        <UserProfile />
        <RepoList
          repositories={this.props.repos.repos.data || []}
          onChangeRepo={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUserData,
  repos: state.userRepos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchUserAndRepos: fetchUserAndRepos, fetchEventsData: fetchEventsData },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
