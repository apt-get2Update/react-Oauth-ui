import React, { Component } from 'react';


class Oauth extends Component {
  onSignIn(googleUser){
    let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  render() {
    return (
      <div className="Oauth">
      <div className="g-signin2" data-onsuccess={(a)=>this.onSignIn(a)} data-theme="dark">hello</div>
       <script src="https://apis.google.com/js/platform.js" async defer></script>
      </div>
    );
  }
}

export default Oauth;
