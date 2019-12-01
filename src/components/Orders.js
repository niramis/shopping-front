import React from 'react';
import { Button,Form } from 'react-bootstrap';
var Component = React.Component;


class Orders extends Component {	

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
            <p>your orders:</p>

        </div>
    );
  }
}

export default Orders