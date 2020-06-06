import { combineReducers } from "redux";

import peoples from "./ListReducer";
import details from "./DetailsReducer";
import search from "./search";

const rootReducer = combineReducers({
  peoples: peoples,
  details: details,
  filters: search
});

export default rootReducer;
