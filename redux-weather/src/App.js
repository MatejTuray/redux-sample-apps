import React, { Component } from 'react';
import './App.css';
import SearchBar from "./containers/SearchBar"
class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
