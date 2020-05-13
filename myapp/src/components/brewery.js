import React, { useEffect } from "react";
import { connect } from "react-redux";

const brewery = () => {

  return (
    <main>
      <h1>brewery</h1>
      
    </main>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    
  };
};

export default connect(
  mapStateToProps,
  {}
)(brewery);