import React from 'react';
var Component = React.Component;


class Settings extends Component {	

  constructor(props) {
    super(props);

    this.state = {
        user: {}
    };
  }

  componentDidMount () {
  
  }



  render() {

    return (
        <div>
            <p>settings</p>
            <p>username</p>
            <p>change password</p>
            <p>change address</p>
        </div>
    );
  }
}

export default Settings