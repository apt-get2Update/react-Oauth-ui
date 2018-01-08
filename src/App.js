import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FaceBook from './FaceBook';
import GoogleAuth from './google';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FaceBook/>
        <GoogleAuth/>
      </div>
    );
  }
}

export default App;
