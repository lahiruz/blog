import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { getSongList } from "../actions";

const PostList = (props) => {
  useEffect(() => {
    props.getSongList();
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
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const stateToProps = (state) => {
  console.log(state);
  return { posts: state.posts };
};

const dispatchToProps = {
  getSongList,
};

export default connect(stateToProps, dispatchToProps)(PostList);
