import React, { Component } from 'react'
import API from "../../utils/API";
import Products from "../../components/Products";


export default class ProductPage extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.loadProducts();
    console.log(this.state.products)
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data })
      )
      .catch(err => console.log(err));
  };

  updateCart = id => {
    API.saveCart(id)
  };

  handleChocie = (id) => {
    API.saveCart(id)
    .catch(err => console.log(err));
  }
  
  
    render() {
    console.log(this.state.products)
  
      return (

        <div>
          <aside id="colorlib-hero" className="breadcrumbs">
        <div className="flexslider">
          <ul className="slides">
            <li style={{backgroundImage: 'url(https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}}>
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
          <div className="row">
            <div className="col-md-10 col-md-push-2">

            {this.state.products.map(product => (
                  <Products 
                    key={product._id}
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    imageMain={"images/" + product.imageMain}
                    handleChocie={this.handleChocie}
                  />
                ))}
              
              <div className="row">
                <div className="col-md-12">
                  <ul className="pagination">
                    <li className="disabled"><a href="#">«</a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">»</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-md-pull-10">
              <div className="sidebar">
                <div className="side">
                  <h2>Categories</h2>
                  <div className="fancy-collapse-panel">
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Men
                            </a>
                          </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                          <div className="panel-body">
                            <ul>
                              <li><a href="#">Jeans</a></li>
                              <li><a href="#">T-Shirt</a></li>
                              <li><a href="#">Jacket</a></li>
                              <li><a href="#">Shoes</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Women
                            </a>
                          </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div className="panel-body">
                            <ul>
                              <li><a href="#">Jeans</a></li>
                              <li><a href="#">T-Shirt</a></li>
                              <li><a href="#">Jacket</a></li>
                              <li><a href="#">Shoes</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingThree">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Jewelry
                            </a>
                          </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                          <div className="panel-body">
                            <ul>
                              <li><a href="#">Jeans</a></li>
                              <li><a href="#">T-Shirt</a></li>
                              <li><a href="#">Jacket</a></li>
                              <li><a href="#">Shoes</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingFour">
                          <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">Jewelry
                            </a>
                          </h4>
                        </div>
                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                          <div className="panel-body">
                            <ul>
                              <li><a href="#">Jeans</a></li>
                              <li><a href="#">T-Shirt</a></li>
                              <li><a href="#">Jacket</a></li>
                              <li><a href="#">Shoes</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side">
                  <h2>Price Range</h2>
                  <form method="post" className="colorlib-form-2">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="guests">Price from:</label>
                          <div className="form-field">
                            <i className="icon icon-arrow-down3" />
                            <select name="people" id="people" className="form-control">
                              <option value="#">1</option>
                              <option value="#">200</option>
                              <option value="#">300</option>
                              <option value="#">400</option>
                              <option value="#">1000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="guests">Price to:</label>
                          <div className="form-field">
                            <i className="icon icon-arrow-down3" />
                            <select name="people" id="people" className="form-control">
                              <option value="#">2000</option>
                              <option value="#">4000</option>
                              <option value="#">6000</option>
                              <option value="#">8000</option>
                              <option value="#">10000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="side">
                  <h2>Color</h2>
                  <div className="color-wrap">
                    <p className="color-desc">
                      <a href="#" className="color color-1" />
                      <a href="#" className="color color-2" />
                      <a href="#" className="color color-3" />
                      <a href="#" className="color color-4" />
                      <a href="#" className="color color-5" />
                    </p>
                  </div>
                </div>
                <div className="side">
                  <h2>Size</h2>
                  <div className="size-wrap">
                    <p className="size-desc">
                      <a href="#" className="size size-1">xs</a>
                      <a href="#" className="size size-2">s</a>
                      <a href="#" className="size size-3">m</a>
                      <a href="#" className="size size-4">l</a>
                      <a href="#" className="size size-5">xl</a>
                      <a href="#" className="size size-5">xxl</a>
                    </p>
                  </div>
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