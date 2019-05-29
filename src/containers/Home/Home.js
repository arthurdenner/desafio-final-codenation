import React from "react";
import { connect } from "react-redux";
import FormSeach from "../../components/FormSeach/FormSeach";
import Nav from "../../components/Nav/Nav";
import { fetchUserData, selectUser } from "../../redux/actions";
import { bindActionCreators } from 'redux'

class Home extends React.Component {
  state = {};
  handleSubmit = e => {
    this.props.fetchUserData(e.name)
  };

  render() {
    return (
      <div>
        <Nav />
        <FormSeach onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUserData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators( { fetchUserData: fetchUserData, selectUser: selectUser } , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
