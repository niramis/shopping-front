import React from 'react';
import { Button,Form } from 'react-bootstrap';
import { appConfig } from '../config.js';

var Component = React.Component;


class Cart extends Component {	

  constructor(props) {
    super(props);

    console.log(props)

    this.state = {
        authenticated: true,
        username: "user",
        password: "user",
        products: [],
        cart: this.props.cart,
        
        order: {
          "user": {
            "id": 1},
            "orderDetails" : [
            {
              "product": {
                "id": 1
              },
                "quanity": 12
            },
            {
              "product": {
                "id": 2
              },
                "quanity": 12
            }
            ]
        }
    };
  }

  componentDidMount () {
  
  }

  makeOrder(event){
    event.preventDefault();
    console.log("make order");

    fetch(appConfig.ORDER_ADD_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(
        
      ),
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


  render() {

    let items = this.state.cart.map(( product, index ) => {
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
          {/* <Button onClick={() => this.addToCart(product)} >Add to cart</Button> */}

        </div>
      );
    })

    if (this.props.cart.length === 0)
    {
      return (
        <div>
          <p>Your cart is empty</p>
        </div>
      );
    } else {
      return (
        <div>
          Items: 
          {items}

          <Form onSubmit={this.makeOrder}>
              
              <Button variant="primary" type="submit">
                  Create order
              </Button>
            </Form>
        </div>
      );
    }


  }


}

export default Cart