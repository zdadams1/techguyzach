import React, { Component } from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/footer/Footer';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Products from './pages/ProductsPage';
import Checkout from './pages/Checkout';
import OrderComplete from './pages/OrderComplete';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Posts from './components/posts/Posts.js';
import Post from './components/post/Post.js';
import NoMatch from './pages/NoMatch';
import Apps from './components/apps/Apps';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentUser } from './actions/userActions';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-react';
import API from './utils/API';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentUser());
  }
}

class App extends Component {
  state = {
    count: 0,
    products: [],
  };

  // componentDidMount() {
  //   this.loadProducts();
  // }

  // loadProducts = () => {
  //   API.getSess()
  //     .then(res =>
  //       this.setState({ products: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    //  console.log(this.state.products.totalQty)
    return (
      <Provider store={store}>
        <Router>
          <div id='page'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/apps' component={Apps} />
              <Route exact path='/products/:id' component={Product} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/products' component={Products} />
              <Route exact path='/checkout' component={Checkout} />
              <Route exact path='/orderComplete' component={OrderComplete} />
              <Route exact path='/blog' component={Posts} />
              <Route exact path='/blog/:post' component={Post} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route component={NoMatch} />
              {/* <Route exact path="/books/:id" render={(props) => {
          return <Detail id={props.match.params.id}/>
        }} /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
