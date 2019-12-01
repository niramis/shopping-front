import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from './components/Login'


import * as serviceWorker from './serviceWorker';
import Register from './components/Register';
import Cart from './components/Cart';


// const routing = (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//         <Route exact path="/" component={App} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/register" component={Register} />
//         <Route exact path="/cart" component={Cart} />
//       </div>
//     </Router>
//   )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
