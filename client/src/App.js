import React, { Component } from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/footer/Footer';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Products from './pages/ProductsPage';
import Checkout from './pages/Checkout';
import OrderComplete from './pages/OrderComplete';
import NoMatch from './pages/NoMatch';
import Apps from './components/apps/Apps';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-react';
import API from './utils/API';

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
            <Route component={NoMatch} />
            {/* <Route exact path="/books/:id" render={(props) => {
          return <Detail id={props.match.params.id}/>
        }} /> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
