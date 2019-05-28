import React from "react";
import { connect } from "react-redux";
import FormSeach from "../../components/FormSeach/FormSeach";
import Nav from "../../components/Nav/Nav";

class Home extends React.Component {
  state = {};
  handleSubmit = e => {};

  render() {
    return (
      <div>
        <Nav />
        <FormSeach onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Home);
