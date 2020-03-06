import React, { Component } from 'react';
import API from '../utils/API';
import Products from '../components/Products';
import HomeHeader from '../components/HomeHeader';
import Nav from '../components/Nav';

class Home extends Component {
  state = {
    products: [],
    cart: [],
    count: 0,
    homePage: 'active'
  };

  componentDidMount() {
    this.loadProducts();
    this.setNavCart();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  };

  // -------Cart Stuff --------------------

  setNavCart = () => {
    API.getSess()
      .then(res => this.cartArray(res.data))
      .catch(err => console.log(err));
  };

  cartArray = data => {
    var datas = data.items;
    var work = 0;
    for (var key in datas) {
      for (var ney in datas[key]) {
        if (ney === 'qty') {
          work += datas[key][ney];
        }
      }
    }
    this.setState({ count: work });
  };

  handleChocie = id => {
    API.saveCart(id);
    this.setState({ count: this.state.count + 1 });
    alert('Added to Cart!');
  };

  render() {
    console.log();
    return (
      <div>
        <Nav totaler={this.state.count} homePage={this.state.homePage} />
        <HomeHeader />
        <div className='colorlib-shop'>
          <div className='container'>
            <div className='row'>
              {this.state.products.map(product => (
                <Products
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  imageMain={'images/' + product.imageMain}
                  handleChocie={this.handleChocie}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
