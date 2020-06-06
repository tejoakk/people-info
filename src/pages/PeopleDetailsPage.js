import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchDetails } from "../actions/getDetails";

import { Details } from "../components/Details";

const PeopleDetailsPage = ({
  match,
  dispatch,
  details,
  hasErrors,
  loading
}) => {
  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchDetails(id));
  }, [dispatch, match]);

  const renderPost = () => {
    if (loading) return <p>Loading Details...</p>;
    if (hasErrors) return <p>Unable to display details.</p>;

    return <Details details={details} />;
  };

  return (
    <section>
      <h1>People Details</h1>
      {renderPost()}
    </section>
  );
};

const mapStateToProps = state => ({
  details: state.details.details,
  loading: state.details.loading,
  hasErrors: state.details.hasErrors
});

export default connect(mapStateToProps)(PeopleDetailsPage);
