import React, { Component } from 'react'
import API from "../../utils/API";
import AddToCart from "../../components/AddCartBtn";
import Nav from "../../components/Nav";

export default class Product extends Component {
  state = {
    product: [],
    products: [],
    count: 0
  };

  componentDidMount() {
    this.loadProduct();
    this.loadProducts();
    this.setNavCart();
  }

  loadProduct = () => {
    API.getProduct(this.props.match.params.id)
      .then(res =>
        this.setState({ product: res.data })
      )
      .catch(err => console.log(err));
  };

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data })
      )
      .catch(err => console.log(err));
  };
  
  // handleChocie = (id) => {
  //   console.log('Hey')
  //   API.saveCart(id)
  //   .then(alert('Added to Cart!'))
  //   .catch(err => console.log(err));
  // }

 // -------Cart Stuff --------------------

setNavCart = () => {
  API.getSess()
  .then(res =>
    this.cartArray(res.data))
  .catch(err => console.log(err));
};

cartArray = (data) => {
  var datas = data.items;
  var final =  [];
  var work = 0;
for(var key in datas) {
  for(var ney in datas[key]) {
    console.log(datas[key][ney])
    if(ney === 'qty') {
      work += datas[key][ney]
    }
  }
}
  this.setState({ count: work})
}


handleChocie = (id) => {
  API.saveCart(id)
  .then(this.setState({ count: this.state.count + 1}))
  .catch(err => console.log(err));
  alert('Added to Cart!')
}


  
    render() {
     
      console.log(this.state.product._id)

      return (

        <div>

        <Nav totaler={this.state.count} />
        
        <div>

<aside id="colorlib-hero" className="breadcrumbs">
        <div className="flexslider">
          <ul className="slides">
            <li style={{backgroundImage: 'url(../../images/cover-img-1.jpg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                    <div className="slider-text-inner text-center">
                      <h1>Products</h1>
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
          <div className="row row-pb-lg">
            <div className="col-md-10 col-md-offset-1">
              <div className="product-detail-wrap">
                <div className="row">
                  <div className="col-md-5">
                    <div className="product-entry">
                      <div className="product-img" style={{backgroundImage: "url(" + "../../images/" + this.state.product.imageMain + ")"}}>
                        <p className="tag"><span className="sale">Sale</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="desc">
                      <h3>{this.state.product.name}</h3>
                      <p className="price">
                        <span>${this.state.product.price}</span> 
                      </p>
                      <p>{this.state.product.description}</p>
                      <div className="row row-pb-sm">
                        <div className="col-md-4">
                          {/* <div className="input-group">
                            <span className="input-group-btn">
                              <button type="button" className="quantity-left-minus btn" data-type="minus" data-field>
                                <i className="icon-minus2" />
                              </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} min={1} max={100} />
                            <span className="input-group-btn">
                              <button type="button" className="quantity-right-plus btn" data-type="plus" data-field>
                                <i className="icon-plus2" />
                              </button>
                            </span>
                            
                          </div> */}
                          <AddToCart id={this.state.product._id} handleChocie={this.handleChocie} />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-md-12 tabulation">
                  <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#description">Description</a></li>
                    <li><a data-toggle="tab" href="#manufacturer">Manufacturer</a></li>
                    <li><a data-toggle="tab" href="#review">Reviews</a></li>
                  </ul>
                  <div className="tab-content">
                    <div id="description" className="tab-pane fade in active">
                      <p>{this.state.product.description}</p>
                      <ul>
                        <li>At vero eos et accusamus et iusto odio </li>
                        <li>Temporibus autem quibusdam et aut officiis</li>
                        <li>Itaque earum rerum hic tenetur</li>
                        <li>Ut enim ad minima veniam, quis nostrum</li>
                        <li>Quis autem vel eum iure reprehenderit qui</li>
                      </ul>
                    </div>
                    <div id="manufacturer" className="tab-pane fade">
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    </div>
                    <div id="review" className="tab-pane fade">
                      <div className="row">
                        <div className="col-md-7">
                          <h3>23 Reviews</h3>
                          <div className="review">
                            <div className="user-img" style={{backgroundImage: 'url(images/person1.jpg)'}} />
                            <div className="desc">
                              <h4>
                                <span className="text-left">Thomas Heli</span>
                                <span className="text-right">14 March 2018</span>
                              </h4>
                              <p className="star">
                                <span>
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-half" />
                                  <i className="icon-star-empty" />
                                </span>
                                <span className="text-right"><a href="/" className="reply"><i className="icon-reply" /></a></span>
                              </p>
                              <p>Best Product ever! Don't forget to buy one for your pet!</p>
                            </div>
                          </div>
                          <div className="review">
                            <div className="user-img" style={{backgroundImage: 'url(images/person2.jpg)'}} />
                            <div className="desc">
                              <h4>
                                <span className="text-left">Jacob Webb</span>
                                <span className="text-right">1 March 2019</span>
                              </h4>
                              <p className="star">
                                <span>
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-half" />
                                  <i className="icon-star-empty" />
                                </span>
                                <span className="text-right"><a href="/" className="reply"><i className="icon-reply" /></a></span>
                              </p>
                              <p>Great Product!</p>
                            </div>
                          </div>
                          <div className="review">
                            <div className="user-img" style={{backgroundImage: 'url(images/person3.jpg)'}} />
                            <div className="desc">
                              <h4>
                                <span className="text-left">Sharon Hugh</span>
                                <span className="text-right">14 December 2018</span>
                              </h4>
                              <p className="star">
                                <span>
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-full" />
                                  <i className="icon-star-half" />
                                  <i className="icon-star-empty" />
                                </span>
                                <span className="text-right"><a href="/" className="reply"><i className="icon-reply" /></a></span>
                              </p>
                              <p>Awesome Product! I bought two!</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-md-push-1">
                          <div className="rating-wrap">
                           
                            <p className="star">
                              <span>
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                (98%)
                              </span>
                              <span>20 Reviews</span>
                            </p>
                            <p className="star">
                              <span>
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                <i className="icon-star-empty" />
                                (85%)
                              </span>
                              <span>10 Reviews</span>
                            </p>
                            <p className="star">
                              <span>
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                <i className="icon-star-empty" />
                                <i className="icon-star-empty" />
                                (98%)
                              </span>
                              <span>5 Reviews</span>
                            </p>
                            <p className="star">
                              <span>
                                <i className="icon-star-full" />
                                <i className="icon-star-full" />
                                <i className="icon-star-empty" />
                                <i className="icon-star-empty" />
                                <i className="icon-star-empty" />
                                (98%)
                              </span>
                              <span>0 Reviews</span>
                            </p>
                            <p className="star">
                              <span>
                                <i className="icon-star-full" />
                                <i className="icon-star-empty" />
                                <i className="icon-star-empty" />
                                <i className="icon-star-empty" />
                                <i className="icon-star-empty" />
                                (98%)
                              </span>
                              <span>0 Reviews</span>
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