import React from 'react';

import { Button,Form } from 'react-bootstrap';
import { appConfig } from '../config.js';

class AddProduct extends React.Component {	

  constructor(props) {
    super(props);

    this.addProduct = this.addProduct.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);

    this.state = {
        authenticated: false,
        name: "",
        description: "",
        price: 0
    };
  }

  addProduct(event){
    event.preventDefault();
    fetch(appConfig.PRODUCT_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        price: this.state.price
      }),
    }).then(res => res.json())
      .then(
      (result) => {
        // this.setState({
        //   categories: result
        // });

        console.log('product created')
      },
      )
  }

  handleChangeName(event) {
    this.setState({
        name: event.target.value
    });
  }

  handleChangeDescription(event) {
    this.setState({
        description: event.target.value
    });
  }

  handleChangePrice(event) {
    this.setState({
        price: event.target.value
    });
  }


  render() {
      
    return (
		<div className="categoryform">
        <h5>Add product</h5>
            <Form onSubmit={this.addProduct}>
              <Form.Group controlId="formBasicCategoryName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" value={this.state.name} onChange={this.handleChangeName}/>
              </Form.Group>

              <Form.Group controlId="formBasicCategoryDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter product description" value={this.state.description} onChange={this.handleChangeDescription}/>
              </Form.Group>

              <Form.Group controlId="formBasicCategoryPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter product price" value={this.state.price} onChange={this.handleChangePrice}/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Add product
              </Button>
            </Form>

		</div>
	);
  }
}

export default AddProduct