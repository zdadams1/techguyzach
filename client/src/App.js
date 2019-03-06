import React, { Component } from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Products from "./pages/ProductsPage";
import Signin from "./pages/SignIn";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-react'
import API from "./utils/API";

class App extends Component {
  state = {
    count: 0,
    products: []

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
      <div id="page">
      <Nav  />
      <Switch>
      
      
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={Product}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/signin" component={Signin}/>
        <Route component={NoMatch} />
        {/* <Route exact path="/books/:id" render={(props) => {
          return <Detail id={props.match.params.id}/>
        }} /> */}
      
      </Switch>
      <Footer />
      </div>
    </Router>
    )
  }
}

export default App;