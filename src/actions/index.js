import jsonplaceholderApi from "../apis/jsonplaceholderApi";

export const getSongList = () => {
  return async (dispatch) => {
    const response = await jsonplaceholderApi.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};
