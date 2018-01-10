import React from 'react';
import GitHubLogin from 'react-github-login';
 

export default class GitHub extends  React.Component{
	onSuccess(r){
		console.log(r);

	}
	onFailure(e){
		console.log(e);
	}
	render(){
		return(
				<GitHubLogin clientId="6b132da9c883d03b37f6"
				redirectUri={'http://localhost:3000'}
			    onSuccess={(r)=>this.onSuccess(r)}
			    onFailure={(e)=>this.onFailure(e)}/>
			);
	}
} 