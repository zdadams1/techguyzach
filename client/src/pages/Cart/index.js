import React, { Component } from 'react'
import API from "../../utils/API";
import Nav from "../../components/Nav";
import StripeCheckout from 'react-stripe-checkout';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './style.css'
import axios from "axios";


export default class Cart extends Component {

  state = {
    products: [],
    cartData: []
  };
  
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getSess()
      .then(res =>
        this.cartArray(res.data))
      .catch(err => console.log(err));
  };

  cartArray = (data) => {
    this.makeProducts(data)
    var datas = data.items;
    var final =  [];
  for(var key in datas) {
    // console.log(datas.hasOwnProperty(key))
    // console.log(key)
    // console.log(datas[key])
    final.push(datas[key])
  }
    this.setState({ cartData: final})
  }

  makeProducts = (data) => {
    this.setState({products: data})
  }

  deletProduct = (id) => {
    API.reduceOne(id)
    .then(res =>
      this.cartArray(res.data))
    .catch(err => console.log(err));
  }

 cartCheck = () => {
   console.log(this.state.cartData.length)
   if(this.state.cartData.length != 'undefined') {
      return "/checkout"
   }else {
     alert('Please add items to your cart before proceeding to check out. Thank you.')
  }
}

  render() {
    console.log(this.state.cartData.length)
    return (
      <div>
        <Nav />
     
      <div>
         <aside id="colorlib-hero" className="breadcrumbs">
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
      </aside>

      <div className="colorlib-shop">
        <div className="container">
          <div className="row row-pb-md">
            <div className="col-md-10 col-md-offset-1">
              <div className="process-wrap">
                <div className="process text-center active">
                  <p><span>01</span></p>
                  <h3>Shopping Cart</h3>
                </div>
                <div className="process text-center">
                  <p><span>02</span></p>
                  <h3>Checkout</h3>
                </div>
                <div className="process text-center">
                  <p><span>03</span></p>
                  <h3>Order Complete</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row row-pb-md">
            <div className="col-md-10 col-md-offset-1">
              <div className="product-name">
                <div className="one-forth text-center">
                  <span>Product Details</span>
                </div>
                <div className="one-eight text-center">
                  <span>Price</span>
                </div>
                <div className="one-eight text-center">
                  <span>Quantity</span>
                </div>
                <div className="one-eight text-center">
                  <span>Total</span>
                </div>
                <div className="one-eight text-center">
                  <span>Remove</span>
                </div>
              </div>


              <CSSTransitionGroup
                  transitionName="products"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}
                  >
              {this.state.cartData.map(item => (
                 
                 <div className="product-cart">
                   <div className="one-forth">
                     <a href={'products/' + item.item._id}>
                     <div className="product-img" style={{backgroundImage: `url(images/${item.item.imageMain})`}}>
                     </div>
                     </a>
                     <div className="display-tc">
                       <h3>{item.item.name}</h3>
                     </div>
                   </div>
                   <div className="one-eight text-center">
                     <div className="display-tc">
                       <span className="price">${item.item.price}</span>
                     </div>
                   </div>
                   <div className="one-eight text-center">
                     <div className="display-tc">
                       <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" defaultValue={item.qty} min={1} max={100} />
                     </div>
                   </div>
                   <div className="one-eight text-center">
                     <div className="display-tc">
                       <span className="price">${ Math.round(item.price * 100) / 100 }</span>
                     </div>
                   </div>
                   <div className="one-eight text-center">
                     <div className="display-tc">
                       <a onClick={() => this.deletProduct(item.item._id)} className="closed" />
                     </div>
                   </div>
                 </div>
                
   
                   ))}
                   </CSSTransitionGroup>

            </div>
          </div>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="total-wrap">
                <div className="row">
                  <div className="col-md-8">
                    <form action="#">
                      <div className="row form-group">
                        <div className="col-md-3">

                          {this.state.cartData.length <= 0 ?
                          
                            <h4>Please add items to cart before proceeding</h4> :

                            <a href="/checkout" type="submit" defaultValue="Apply Coupon" className={this.state.cartData.length <= 0 ? 'disabled btn btn-primary' : 'btn btn-primary'  }>Checkout</a>
                        } 
                   
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-3 col-md-push-1 text-center">
                    <div className="total">
                      <div className="grand-total">
                        <p><span><strong>Total:</strong></span> <span>{'NaN' ? (Math.round(this.state.products.totalPrice * 100) / 100) : 0}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="colorlib-subscribe">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="col-md-6 text-center">
                <h2><i className="icon-paperplane" />Sign Up for a Newsletter</h2>
              </div>
              <div className="col-md-6">
                <form className="form-inline qbstp-header-subscribe">
                  <div className="row">
                    <div className="col-md-12 col-md-offset-0">
                      <div className="form-group">
                        <input type="text" className="form-control" id="email" placeholder="Enter your email" />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}