var React = require('react');
var Component = React.Component;


class Account extends Component {	

  constructor(props, context) {
    super(props);

    this.state = {
        authenticated: true,
        username: "user",
        password: "user"
    };
  }


  render() {

    return (
		<div>
            account Component

		</div>
		);

  }


}

export default Account