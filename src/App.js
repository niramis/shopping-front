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
import AddProduct from './components/AddProduct';
import AddCategory from './components/AddCategory';
import Newsletter from './components/Newsletter';

// var React = require('react');
var Component = React.Component;

class App extends Component {	

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);

    this.state = {
        authenticated: false,
        username: "user",
        password: "user",
        role: "",
        token: "",
        products: [],
        categories: [],
        cart: []
    };
  }

  loginCallback = (username, token) => {
    // console.log(username)
    // console.log(token)
    this.setState({
      username: username,
      token: token,
      authenticated: true,
      role: "user"
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

  logout(){
    this.setState({
      authenticated: false,
      username: "user",
      password: "user",
      role: "",
      token: "",
      cart: []
    });
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
            <div className="header">
              <Navbar expand="lg">
                {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
                <Link to="/">Home</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    
                    

                    {this.state.role === "admin" ? (
                      <div>
                        <Link to="/admin">Admin panel</Link>
                      </div>
                    ):( <span></span>)
                    }

                    {this.state.role === "user" ? (
                      <div>
                        <Link to="/orders">Orders</Link>
                        <Link to="/settings">User settings</Link>
                      </div>
                    ):( <span></span>)
                    }


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
                    {this.state.authenticated ? (<div>
                      <Link to="/logout" onClick={this.logout} >Log out</Link>
                    </div>
                    ):(
                    <div>
                      <Link to="/login">Login</Link>
                    </div>)
                    }
                    <Link to="/cart">Cart</Link>

                    <Link to="/register">Register</Link>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </div>

    
              <div className="main">
                <Row>
                  <Col sm={3}>
                      <Container>
                        <div className="left_div">
                          <ul>
                            {category_names}
                          </ul>
                        </div>
                      </Container>
                  </Col>
                  <Col sm={9}>
                    <Switch>
                      <Route exact path='/' render={(props) => <Home {...props} callbackFromApp={this.homeCallback} />} />
                      <Route exact path='/login' render={(props) => <Login {...props} isAuthed={"abcdefgh"} callbackFromApp={this.loginCallback} />} />
                      <Route exact path='/cart' render={(props) => <Cart {...props} cart={this.state.cart} />} />
                      <Route exact path='/register' component={Register} />
                      <Route exact path='/orders' component={Orders} />
                      <Route exact path='/settings' component={Settings} />
                      <Route exact path='/admin' component={Admin} />
                      <Route exact path='/addproduct' component={AddProduct}  />
                      <Route exact path='/addcategory' component={AddCategory} />
                    </Switch>
                  </Col>
                </Row>
              </div>


          <div className="newsletter_div">
            <Newsletter />
          </div>

          <div className="footer_div">
            <div className="footer_content">
              <Row>
                <Col sm={3}>
                  <h5>Obsługa klienta</h5>
                  <ul>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                  </ul>
                </Col>
                <Col sm={3}>
                  <h5>Twoje konto</h5>
                  <ul>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                  </ul>      
                </Col>
                <Col sm={3}>
                  <h5>Shop</h5>
                  <ul>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                  </ul>
                </Col>
                <Col sm={3}>
                  <h5>Kontakt</h5>
                </Col>
              </Row>
            </div>
          </div>  
        </Router>
      </div>
    );
  }
}

export default App;
