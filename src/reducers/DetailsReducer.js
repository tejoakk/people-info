import * as actions from "../config";

export const initialState = {
  loading: true,
  hasErrors: false,
  details: {}
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POST:
      return { ...state, loading: true };
    case actions.GET_POST_SUCCESS:
      return { details: action.payload, loading: false, hasErrors: false };
    case actions.GET_POST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
