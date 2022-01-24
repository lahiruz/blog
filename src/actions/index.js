import _ from 'lodash';
import jsonplaceholderApi from "../apis/jsonplaceholderApi";

export const getPosts = () => {
  return async (dispatch) => {
    const response = await jsonplaceholderApi.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const getUsers = (id) => {
    return async (dispatch) => {
      const response = await jsonplaceholderApi.get(`/users/${id}`);
      dispatch({ type: "FETCH_USER", payload: response.data });
    };
  };

export const getPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(getPosts());
    const userIds = _.uniq(getState().posts.map(d => d.userId));
    userIds.forEach(id => dispatch(getUsers(id)));
};
