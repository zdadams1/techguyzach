import React, { Component } from 'react';
import API from '../../utils/API';
import Nav from '../../components/Nav';
import Footer from '../../components/footer/Footer';

class OrderComplete extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div className='colorlib-shop'>
          <div className='container'>
            <div className='row row-pb-lg'>
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
                  <div className='process text-center active'>
                    <p>
                      <span>03</span>
                    </p>
                    <h3>Order Complete</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1 text-center'>
                <span className='icon'>
                  <i className='icon-shopping-cart' />
                </span>
                <h2>Thank you for purchasing, Your order is complete</h2>
                <p>
                  <a href='/' className='btn btn-primary'>
                    Home
                  </a>
                  <a href='/products' className='btn btn-primary btn-outline'>
                    Continue Shopping
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OrderComplete;
