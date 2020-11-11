import React from 'react';
import Brewery from "./components/Brewery";
import { connect } from "react-redux";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Brewery />
    </div>
  );
}

const mapStateToProps = state => {
  console.log('App',state);
  return {
    
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);