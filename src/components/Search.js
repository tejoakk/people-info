import React from "react";
import { connect } from "react-redux";
import { filterText } from "../actions/search";

const Filters = props => (
  <div style={{ marginBottom: 15 }}>
    <input
      type="text"
      placeholder="search"
      value={props.text}
      onChange={e => {
        props.dispatch(filterText(e.target.value));
      }}
    ></input>
  </div>
);

const mapStateToProps = state => {
  return {
    text: state.text
  };
};

export default connect(mapStateToProps)(Filters);
