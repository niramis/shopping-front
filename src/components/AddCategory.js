import React from 'react';

import { Button,Form } from 'react-bootstrap';
import { appConfig } from '../config.js';

class AddCategory extends React.Component {	

  constructor(props) {
    super(props);

    this.addCategory = this.addCategory.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);

    this.state = {
        authenticated: false,
        name: "",
        description: ""
    };
  }

  addCategory(event){
    event.preventDefault();
    console.log(this.state.name);
    fetch(appConfig.CATEGORY_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description
      }),
    }).then(res => res.json())
      .then(
      (result) => {
        // this.setState({
        //   categories: result
        // });

        console.log('category created')
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


  render() {
      
    return (
		<div className="categoryform">
        <h5>Add category</h5>
            <Form onSubmit={this.addCategory}>
              <Form.Group controlId="formBasicCategoryName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter category name" value={this.state.name} onChange={this.handleChangeName}/>
              </Form.Group>

              <Form.Group controlId="formBasicCategoryDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter category description" value={this.state.description} onChange={this.handleChangeDescription}/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Add category
              </Button>
            </Form>

		</div>
	);
  }
}

export default AddCategory