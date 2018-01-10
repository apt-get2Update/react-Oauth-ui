import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FaceBook from './FaceBook';
import GoogleAuth from './google';
import GitHub from './GitHub';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FaceBook/>
        <GoogleAuth/>
        <GitHub/>
      </div>
    );
  }
}

export default App;
