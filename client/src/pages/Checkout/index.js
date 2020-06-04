import React, { Component } from 'react';
import API from '../../utils/API';
import Nav from '../../components/Nav';
import StripeCheckout from 'react-stripe-checkout';
import { Redirect } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

import axios from 'axios';

export default class Checkout extends Component {
  state = {
    products: [],
    cartData: [],
    fireRedirect: false,
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

  onToken = (token, args) => {
    console.log('fired');
    const newBody = args;
    const total = Math.round(this.state.products.totalPrice * 100) / 100;

    const myObj = { ...args, location: token };
    console.log(token);

    API.charged(token).then(this.setState({ fireRedirect: true }));

    // console.log(token)
    // fetch('/charge', {
    //   body: JSON.stringify(token),
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        {this.state.fireRedirect && (
          <Redirect to='/orderComplete' push={true} />
        )}
        <Nav />

        <div>
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
                    <div className='process text-center active'>
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
                  </div>

                  {this.state.cartData.map((item) => (
                    <div className='product-cart'>
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
                          <input
                            type='text'
                            id='quantity'
                            name='quantity'
                            className='form-control input-number text-center'
                            defaultValue={item.qty}
                            min={1}
                            max={100}
                          />
                        </div>
                      </div>
                      <div className='one-eight text-center'>
                        <div className='display-tc'>
                          <span className='price'>
                            ${Math.round(item.price * 100) / 100}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='row'>
                <div className='col-md-10 col-md-offset-1'>
                  <div className='total-wrap'>
                    <div className='row'>
                      <div className='col-md-8'>
                        <form action='#'>
                          <div className='row form-group'>
                            <div className='col-md-3'>
                              {/* <button type="submit" defaultValue="Apply Coupon" className="btn btn-primary">Checkout</button> */}
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className='col-md-3 col-md-push-1 text-center'>
                        <div className='total'>
                          <div className='grand-total'>
                            <p>
                              <span>
                                <strong>Shipping:</strong>
                              </span>{' '}
                              <span>Free Shipping</span>
                            </p>
                            <p>
                              <span>
                                <strong>Total:</strong>
                              </span>{' '}
                              <span>
                                {'NaN'
                                  ? Math.round(
                                      this.state.products.totalPrice * 100
                                    ) / 100
                                  : 0}
                              </span>
                            </p>
                            <StripeCheckout
                              name='Store'
                              description='Checkout for Store'
                              token={this.onToken}
                              stripeKey='pk_live_EaFIYb5kp0eSOnjAGwCL21PS'
                              email
                              currency='USD'
                              shippingAddress
                              billingAddress
                              amount={this.state.products.totalPrice * 100}
                            />
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
        <Footer />
      </div>
    );
  }
}
