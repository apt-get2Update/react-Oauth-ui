import React from 'react';
import LinkedIn from 'react-linkedin-login';

export default class LoginWithLinkedin extends React.Component {
 

  callbackLinkedIn ({code, redirectUri}) {
    // Login with linkedin 
    console.log(code,redirectUri);
  }
 
  render () {
    return (
      <LinkedIn
        clientId='81f8xrvceb4ofw'
        callback={(res)=>this.callbackLinkedIn(res)}
        
        text='LinkedIn' />
    )
  }
 
}