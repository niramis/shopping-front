import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Cart from './components/Cart'
import Orders from './components/Orders'
import Register from './components/Register'
import Home from './components/Home'

import { appConfig } from './config.js';

import './App.css';
import Settings from './components/Settings';
import Admin from './components/Admin';

// var React = require('react');
var Component = React.Component;

class App extends Component {	

  constructor(props) {
    super(props);

    this.state = {
        authenticated: true,
        username: "user",
        password: "user",
        products: [],
        categories: [],
        cart: []
    };
  }

  loginCallback = (data) => {
    this.setState({
      username: "authuser",
    });
  }

  homeCallback = (product) => {
    // this.setState({
    //   username: "authuser",
    // });
    console.log("home callback")
    console.log(product)

    this.setState({ 
      cart: this.state.cart.concat([product])
    })

  }

  componentDidMount() {
    // this.fetchProducts();
    this.fetchCategories();
  }

  fetchCategories(){
    fetch(appConfig.CATEGORY_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      // body: JSON.stringify({

      // }),
    }).then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
          categories: result
			  });
			},
		  )
  }

  render() {

    let category_names = this.state.categories.map(( entity, index ) => {
      return (
        <li key={index}>{entity.name}</li>
      );
    })

    return (
      <div className="App">
        <Router>
          <div>
              <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
                <Link to="/">Home</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Link to="/admin">Admin panel</Link>
                    <Link to="/settings">User settings</Link>
                    <Link to="/orders">Orders</Link>
                    {/* <Nav.Link href="#link">Link1</Nav.Link>
                    <Nav.Link href="#link">Link2</Nav.Link>
                    <Nav.Link href="#link">Link3</Nav.Link>
                    <Nav.Link href="#link">Link4</Nav.Link>
                    <Nav.Link href="#link">Link5</Nav.Link> */}
                  </Nav>
                  <Form inline>

                    {this.state.authenticated ? (<div>
                      Hello, {this.state.username}
                    </div>
                    ):(
                    <div>
                      unauth
                    </div>)
                    }

                    {/* <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                      </Nav>
                    </Navbar.Collapse> */}

                    <Link to="/cart">Cart</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
    
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                  Link
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
    
            <Row>
              <Col sm={4}>
                  <Container>
                    <div className="left_div">
                      <ul>
                        {category_names}
                      </ul>
                    </div>
                  </Container>
              </Col>
              <Col sm={8}>
                <Switch>
                  <Route exact path='/' render={(props) => <Home {...props} callbackFromApp={this.homeCallback} />} />
                  <Route exact path='/login' render={(props) => <Login {...props} isAuthed={"abcdefgh"} callbackFromApp={this.loginCallback} />} />
                  {/* <Route path='/cart' component={Cart} /> */}
                  <Route exact path='/cart' render={(props) => <Cart {...props} cart={this.state.cart} />} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/orders' component={Orders} />
                  <Route exact path='/settings' component={Settings} />
                  <Route exact path='/admin' component={Admin} />
                </Switch>
              </Col>
            </Row>
          </div>

          <div className="footer_div">
            <Navbar  expand="lg">
              <Navbar.Brand href="#">Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  {/* <Nav.Link href="#home">Home</Nav.Link> */}



                  <Nav.Link href="#link">Link1</Nav.Link>
                  <Nav.Link href="#link">Link2</Nav.Link>
                  <Nav.Link href="#link">Link3</Nav.Link>
                  <Nav.Link href="#link">Link4</Nav.Link>
                  <Nav.Link href="#link">Link5</Nav.Link>
    
                </Nav>
    
              </Navbar.Collapse>
            </Navbar>
          </div>  
        </Router>
      </div>
    );
  }
}

export default App;
