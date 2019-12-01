import React from 'react';
import { Button,Form } from 'react-bootstrap';
var Component = React.Component;


class Admin extends Component {	

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

        </div>
    );
  }
}

export default Admin