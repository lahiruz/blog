import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { getPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = (props) => {
  useEffect(() => {
    props.getPostsAndUsers();
  }, []);

  return (
    <div className="ui relaxed divided list">
      {!!props.posts &&
        props.posts.length > 0 &&
        props.posts.map((d) => {
          return (
            <div className="item" key={d.id}>
              <i className="large middle aligned icon user"></i>
              <div className="content">
                <div className="description">
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                  <UserHeader userId={d.userId}></UserHeader>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const stateToProps = (state) => {
  return { posts: state.posts };
};

const dispatchToProps = {
    getPostsAndUsers,
};

export default connect(stateToProps, dispatchToProps)(PostList);
