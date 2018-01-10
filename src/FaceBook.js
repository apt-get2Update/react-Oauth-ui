import React from 'react';

import Facebook from 'react-oauth2';
export default class FaceBookOauth  extends React.Component{
  constructor(props){
    super(props);
    this.state={
      "data": {
        "id": "", "name": "", "email": "", "gender": "", "location": { "id": "", "name": "" }
      }
    };
  }
  facebook(err, res) {
    console.log(res,err);
    if (!err) {
      this.setState({ data: res.profile })
    } else {
      this.setState({ data: 'something happen wrong' })
    }
  }
  render() {
    return <div>
      <Facebook 
        url={'http://localhost:3000/'} // app start your to configure in domain face setting
        clientId={'937661006383744'} //App Id
        clientSecret={'3746ccdc592956655224320a22063e1e'} // secret key
        redirectUri={'http://localhost:3000/'}  // redirect url configure for your landing page  valid auth redirect feild to set this uri
        scope={'email,user_location'}
        width={300}
        height={300}
        callback={(err,res)=>this.facebook(err,res)}
        style={{ color: 'green' }}
      >
        Login With Facebook From component
  </Facebook>
      <hr />
      {JSON.stringify(this.state)}
    </div>
  }
}



 