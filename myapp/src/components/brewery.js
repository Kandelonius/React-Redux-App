import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBrewery } from "../store/actions";

const Brewery = props => {
  useEffect(() => {
    props.fetchBrewery();
  }, [])
  return (
    <main>
      <h1>Brewery</h1>
      {props.isFetching && <h3>Fetching data...</h3>}
    </main>
  );
};

const mapStateToProps = state => {
  console.log('BRE', state.brew);
  return {
    isFetching: state.brew.isFetching,
    brewery: state.brew.brewery,
    location: state.brew.location,
    error: state.brew.error
  };
};

export default connect(
  mapStateToProps,
  { fetchBrewery }
)(Brewery);