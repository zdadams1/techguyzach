import React, { Component } from 'react'
import API from "../../utils/API";

export default class Nav extends Component {

  state = {
    count: 3,
    cart: []
  };
  
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getSess()
      .then(res =>
        this.setState({ cart: res.data })
      )
      .catch(err => console.log(err));
      
  };



  
  render() {
    
console.log('meNav ' + this.state.cart.cart)
// const activeClass = (route) => { return this.location.pathname === route ? "active" : null }
    return (
      <nav className="colorlib-nav" role="navigation">
        <div className="top-menu">
          <div className="container">
            <div className="row">
              <div className="col-xs-2">
                <div id="colorlib-logo"><a href="/">Store</a></div>
              </div>
              <div className="col-xs-10 text-right menu-1">
                <ul>
                  {/* <li className={activeClass("/")}><a href="/">Home</a></li>
                  
                  <li className={activeClass("/products")}><a href="/products">Shop</a></li>
                   <li className={activeClass("/")}><a href="/">About</a></li>
                  <li className={activeClass("/")}><a href="/">Contact</a></li> 
                  <li className={activeClass("/cart")}><a href="/cart"><i className="icon-shopping-cart" /> Cart {this.props.totaler} </a></li> */}
                  <li><a href="/">Home</a></li>
                  
                  <li ><a href="/products">Shop</a></li>
                   <li><a href="/">About</a></li>
                  <li><a href="/">Contact</a></li> 
                  <li ><a href="/cart"><i className="icon-shopping-cart" /> Cart {this.props.totaler} </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}