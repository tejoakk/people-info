import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAll } from "../actions/getAll";
import Filters from "../components/Search";
import getVisible from "../utils/helper";
import { People } from "../components/People";

const PeopleList = ({ dispatch, loading, peoples, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const renderPeople = () => {
    if (loading) return <p>Loading peoples list...</p>;
    if (hasErrors) return <p>Unable to display peoples list.</p>;
    return peoples.map(people => (
      <People key={people.id} people={people} excerpt />
    ));
  };

  return (
    <section>
      Search:
      <Filters />
      <h1>People list</h1>
      {renderPeople()}
    </section>
  );
};

const mapStateToProps = state => ({
  loading: state.peoples.loading,
  peoples: getVisible(state.peoples.peoples, state.filters.search),
  hasErrors: state.peoples.hasErrors
});

export default connect(mapStateToProps)(PeopleList);
