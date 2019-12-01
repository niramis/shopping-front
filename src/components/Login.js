import { Button,Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import { appConfig } from '../config.js';

var React = require('react');
var Component = React.Component;


class Login extends Component {	

  constructor(props, context) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.state = {
      authenticated: false,
      username: "user2",
      password: "user",
      token: ""
    };
  }

  // headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer ' + this.state.clientToken,
  //   'Host': 'api.producthunt.com'
  // }

  handleClick(event){
    event.preventDefault();
    this.authenticate();
  }

  authenticate(){
    fetch(appConfig.LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password
      }),
    }).then(res => res.json())
		  .then(
			(result) => {
          this.setState({
            token: result.token,
            authenticated: true,
          });

          this.props.callbackFromApp(this.state.username, result.token);
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

    // if (this.state.authenticated) {
    //   return <Redirect to={{
    //     pathname: '/', state: { id: '123' }
    // }} />
    // }

    return (
		<div className="loginform">
        <h2>Login page</h2>
        {/* <h3>{this.props.isAuthed}</h3> */}
        <br/>
            <Form onSubmit={this.handleClick}>
              <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" value={this.state.keywords} onChange={this.handleChangeLogin}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={this.state.keywords} onChange={this.handleChangePassword}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                  Login
              </Button>
            </Form>

		</div>
	);
  }
}

export default Login