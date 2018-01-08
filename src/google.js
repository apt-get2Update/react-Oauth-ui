import React from 'react';
import { GoogleLogin } from 'react-google-login';
 

export default class GoogleAuth extends React.Component{

responseGoogle (response){
  console.log(response);
}
	render(){
		return(<GoogleLogin
				    clientId="218664655748-uhev36fcb83c9dguaopvftin5ljcvopc.apps.googleusercontent.com"
				    buttonText="Login"
				    secretKey="26L0_QPrWY5ttw1IymqnWmvn"
				    onSuccess={(r)=>this.responseGoogle(r)}
				    onFailure={(r)=>this.responseGoogle(r)}
				  />)
	}
} 

