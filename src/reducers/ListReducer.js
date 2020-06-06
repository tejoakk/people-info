import * as constants from "../config";

export const initialState = {
  loading: false,
  hasErrors: false,
  peoples: []
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_POST:
      return { ...state, loading: true };
    case constants.GET_POST_SUCCESS:
      return { peoples: action.payload, loading: false, hasErrors: false };
    case constants.GET_POST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
