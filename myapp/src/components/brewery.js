import React, { useEffect } from "react";
import { connect } from "react-redux";

const Brewery = () => {

  return (
    <main>
      <h1>Brewery</h1>
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
  {}
)(Brewery);