import React from 'react';

import { Button,Form } from 'react-bootstrap';
import { appConfig } from '../config.js';

class Register extends React.Component {	

  constructor(props) {
    super(props);

    this.registerUser = this.registerUser.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.state = {
        authenticated: false,
        username: "",
        password: ""
    };
  }

  registerUser(event){
    event.preventDefault();
    // if(this.state.username === "user" && this.state.password === "user"){
    //   this.props.callbackFromLogin(this.state);
    // }

    fetch(appConfig.REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
    }).then(res => res.json())
      .then(
      (result) => {
        // this.setState({
        //   categories: result
        // });

        console.log('user created')
      },
      )
  }

  handleChangeLogin(event) {
    this.setState({
        username: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
        password: event.target.value
    });
  }


  render() {
    return (
		<div className="passwordform">
        <h2>Register page</h2>
            <Form onSubmit={this.registerUser}>
              <Form.Group controlId="formBasicUsernameRegister">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" value={this.state.keywords} onChange={this.handleChangeLogin}/>
              </Form.Group>

              <Form.Group controlId="formBasicPasswordRegister">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={this.state.keywords} onChange={this.handleChangePassword}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword2">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" value={this.state.keywords} onChange={this.handleChangePassword}/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>

		</div>
	);
  }
}

export default Register