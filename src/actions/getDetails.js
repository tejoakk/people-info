
import * as config from "../config";

export const getPost = () => ({ type: config.GET_POST });
export const getPostSuccess = details => ({
         type: config.GET_POST_SUCCESS,
         payload: details
       });
export const getPostFailure = () => ({ type: config.GET_POST_FAILURE });

export function fetchDetails(id) {
  return async dispatch => {
    dispatch(getPost());

    try {
      const response = await fetch(`${config.BASE_URL}/people/${id}`);
      const data = await response.json();

      dispatch(getPostSuccess(data));
    } catch (error) {
      dispatch(getPostFailure());
    }
  };
}
