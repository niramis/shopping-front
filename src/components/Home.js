import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { appConfig } from '../config.js';
var Component = React.Component;


class Home extends Component {	

  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.state = {
        authenticated: true,
        username: "user3",
        password: "user",
        products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts(){
    fetch(appConfig.PRODUCTS_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      // body: JSON.stringify({

      // }),
    }).then(res => res.json())
		  .then(
			(result) => {
        console.log(result)
			  this.setState({
          products: result
			  });
			},
		)
  }
  
  addToCart(product){
    this.props.callbackFromApp(product);
  }

  render() {

    let items = this.state.products.map(( product, index ) => {
      let categories = product.categories.map((category,i) => {
        return <li key = {i}>{category.name}</li>
      })

      return (
        <div key={index}>
          <h4>{product.name}</h4>
          <p>Description: {product.description}</p>
          <h5>Price: {product.price}</h5>
          <h5>Categories</h5>
          <ul>
            {categories}
          </ul>
          <Button onClick={() => this.addToCart(product)} >Add to cart</Button>

        </div>
      );
    })

    return (
		<div>
      <div className="center_div">

        <div>
          <h3>Products</h3>
        </div>

        <div>
          {items}
        </div>
        
        
      </div>
		</div>
		);

  }


}

export default Home