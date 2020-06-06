export const initialState = {
  search: ''
};

export default function search(state = initialState, action) {
  return {
    ...state,
    search: action.text
  };
}
