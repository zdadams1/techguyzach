import React, { Component } from 'react';
import API from '../../utils/API';
import Nav from '../../components/Nav';
import StripeCheckout from 'react-stripe-checkout';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './style.css';
import axios from 'axios';
import $ from 'jquery';
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/subscribe/Subscribe';

export default class Cart extends Component {
  state = {
    products: [],
    cartData: [],
    cartPage: 'active',
    qtyUpdate: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getSess()
      .then((res) => this.cartArray(res.data))
      .catch((err) => console.log(err));
  };

  cartArray = (data) => {
    this.makeProducts(data);
    var datas = data.items;
    var final = [];
    for (var key in datas) {
      // console.log(datas.hasOwnProperty(key))
      // console.log(key)
      // console.log(datas[key])
      final.push(datas[key]);
    }
    this.setState({ cartData: final });
  };

  makeProducts = (data) => {
    this.setState({ products: data });
  };

  deletProduct = (id) => {
    API.reduceOne(id)
      .then((res) => this.cartArray(res.data))
      .catch((err) => console.log(err));
  };

  cartCheck = () => {
    console.log(this.state.cartData.length);
    if (this.state.cartData.length != 'undefined') {
      return '/checkout';
    } else {
      alert(
        'Please add items to your cart before proceeding to check out. Thank you.'
      );
    }
  };

  addOne = (id) => {
    API.saveCart(id);
  };

  removeOne = (id) => {
    API.reduced(id);
  };

  render() {
    return (
      <div>
        <Nav totaler={this.state.count} cartPage={this.state.cartPage} />

        <div>
          {/* <aside id="colorlib-hero" className="breadcrumbs">
        <div className="flexslider">
          <ul className="slides">
            <li style={{backgroundImage: 'url(https://images.pexels.com/photos/210588/pexels-photo-210588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                    <div className="slider-text-inner text-center">
                      <h1>Shopping Cart</h1>
                     
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside> */}

          <div className='colorlib-shop'>
            <div className='container'>
              <div className='row row-pb-md'>
                <div className='col-md-10 col-md-offset-1'>
                  <div className='process-wrap'>
                    <div className='process text-center active'>
                      <p>
                        <span>01</span>
                      </p>
                      <h3>Shopping Cart</h3>
                    </div>
                    <div className='process text-center'>
                      <p>
                        <span>02</span>
                      </p>
                      <h3>Checkout</h3>
                    </div>
                    <div className='process text-center'>
                      <p>
                        <span>03</span>
                      </p>
                      <h3>Order Complete</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row row-pb-md'>
                <div className='col-md-10 col-md-offset-1'>
                  <div className='product-name'>
                    <div className='one-forth text-center'>
                      <span>Product Details</span>
                    </div>
                    <div className='one-eight text-center'>
                      <span>Price</span>
                    </div>
                    <div className='one-eight text-center'>
                      <span>Quantity</span>
                    </div>
                    <div className='one-eight text-center'>
                      <span>Total</span>
                    </div>
                    <div className='one-eight text-center'>
                      <span>Remove</span>
                    </div>
                  </div>

                  <CSSTransitionGroup
                    transitionName='products'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                  >
                    {this.state.cartData.map((item, i) => (
                      <div className='product-cart' key={item.item._id}>
                        <div className='one-forth'>
                          <a href={'products/' + item.item._id}>
                            <div
                              className='product-img'
                              style={{
                                backgroundImage: `url(images/${item.item.imageMain})`,
                              }}
                            ></div>
                          </a>
                          <div className='display-tc'>
                            <h3>{item.item.name}</h3>
                          </div>
                        </div>
                        <div className='one-eight text-center'>
                          <div className='display-tc'>
                            <span className='price'>${item.item.price}</span>
                          </div>
                        </div>
                        <div className='one-eight text-center'>
                          <div className='display-tc'>
                            <div className='qty mt-5'>
                              {item.qty <= 1 ? (
                                ''
                              ) : (
                                <a
                                  href='/cart'
                                  onClick={() => this.removeOne(item.item._id)}
                                >
                                  <span className='minus bg-dark'>-</span>
                                </a>
                              )}
                              <input
                                type='number'
                                className='count'
                                name='qty'
                                value={item.qty}
                              />
                              <a
                                href='/cart'
                                onClick={() => this.addOne(item.item._id)}
                              >
                                <span className='plus bg-dark'>+</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className='one-eight text-center'>
                          <div className='display-tc'>
                            <span className='price'>
                              ${Math.round(item.price * 100) / 100}
                            </span>
                          </div>
                        </div>
                        <div className='one-eight text-center'>
                          <div className='display-tc'>
                            <a
                              onClick={() => this.deletProduct(item.item._id)}
                              className='closed'
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CSSTransitionGroup>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-10 col-md-offset-1'>
                  <div className='total-wrap'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <form action='#'>
                          <div className='row form-group'>
                            <div className='col-md-3'>
                              {this.state.cartData.length <= 0 ? (
                                <h4>
                                  Please add items to cart before proceeding
                                </h4>
                              ) : (
                                <div>
                                  <a
                                    href='/checkout'
                                    type='submit'
                                    defaultValue='Apply Coupon'
                                    className={
                                      this.state.cartData.length <= 0
                                        ? 'disabled btn btn-primary'
                                        : 'btn btn-primary'
                                    }
                                  >
                                    Checkout
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className='col-md-4'>
                        <div className='row'></div>
                      </div>
                      <div className='col-md-3 col-md-push-1 text-center'>
                        <div className='total'>
                          <div className='grand-total'>
                            <p>
                              <span>
                                <strong>Total:</strong>
                              </span>{' '}
                              <span>
                                {isNaN(this.state.products.totalPrice)
                                  ? 0
                                  : Math.round(
                                      this.state.products.totalPrice * 100
                                    ) / 100}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
