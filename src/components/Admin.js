import React from 'react';
import { Button,Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';


class Admin extends React.Component {	

  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
  }

  componentDidMount () {
  
  }



  render() {

    return (
        <div>
            <p>admin site</p>
            
            <Link to="/addproduct">Add product</Link>
            <Link to="/addcategory">Add category</Link>

            <Switch>
              <Route exact path='/addproduct' component={AddProduct}  />
              <Route exact path='/addcategory' component={AddCategory} />
            </Switch>

        </div>
    );
  }
}

export default Admin