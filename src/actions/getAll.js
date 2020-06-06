import * as Constants from "../config"

export const getPosts = () => ({ type: Constants.GET_POST });
export const getPostsSuccess = peoples => ({
         type: Constants.GET_POST_SUCCESS,
         payload: peoples
       });
export const getPostsFailure = () => ({ type: Constants.GET_POST_FAILURE });

export function fetchAll() {
  return async dispatch => {
    dispatch(getPosts());

    try {
      const response = await fetch(`${Constants.BASE_URL}/people`);
      const data = await response.json();
      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
