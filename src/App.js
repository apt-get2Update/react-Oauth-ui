import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FaceBook from './FaceBook';
import GoogleAuth from './google';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import Gitlab from './gilabLogin';

class App extends Component {
	onSucess(e){
		console.log(e)
	}
	onFailure(e){
		console.log(e);
	}
  render() {
    return (
      <div className="App">
        <FaceBook/>
        <GoogleAuth/>
        <GitHub/>
        <LinkedIn/>
        <Gitlab
		    state='fksjdhafgajksdhgfjhasdgf'
		    clientId='c2b6df1ceffb3f64ffecda703cdc6bacf85b082ba3ee97b7333a88ce26387331'
		    secret='a87a336475f3179ed49c71cd87d681f384a0b48abca47f0ffdb9d0e94ce4cffa'
		    onSuccess={(e)=>this.onSuccess(e)}
		    onFailure={(s)=>this.onFailure(s)}
		    redirectUri='http://localhost:3000/' 
        />
      </div>
    );
  }
}

export default App;
