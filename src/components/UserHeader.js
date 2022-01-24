import React from "react";
import { connect } from "react-redux";

const UserHeader = (props = {}) => {
  return <h3>{(props.user || {}).name}</h3>;
};

const stateToProps = (state, ownProps) => {
  const user = state.users.find(d => d.id === ownProps.userId);
  return {user};
}

export default connect(stateToProps)(UserHeader);
