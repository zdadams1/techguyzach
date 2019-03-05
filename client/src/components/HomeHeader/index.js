import React, { Component } from "react";



export default class HomeHeader extends Component {
  state = { 
   
  }


  render() {
  

    return (
        <div>
        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{backgroundImage: 'url(https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-2 col-sm-12 col-xs-12 slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className="head-1">Cameras</h1>
                          <h2 className="head-2">Photography Equipment</h2>
                          <h2 className="head-3">Collection</h2>
                          <p className="category"><span>New Cameras, Tripods &amp; Accessories</span></p>
                          <p><a href="/products" className="btn btn-primary">Shop Now</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(https://images.pexels.com/photos/207950/pexels-photo-207950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-2 col-sm-12 col-xs-12 slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className="head-1">Coffe Mugs</h1>
                          <h2 className="head-2">Sale</h2>
                          <h2 className="head-3">45% off</h2>
                          <p className="category"><span>New cups, mugs &amp; wine glasses</span></p>
                          <p><a href="/products" className="btn btn-primary">Shop Now</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(https://images.pexels.com/photos/1319572/pexels-photo-1319572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className="head-1">Toys</h1>
                          <h2 className="head-2">For All Ages</h2>
                          <h2 className="head-3">up to 30% off</h2>
                          <p className="category"><span>Sed ut perspiciatis unde omnis</span></p>
                          <p><a href="/products" className="btn btn-primary">Shop Now</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <div id="colorlib-featured-product">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <a href="shop.html" className="f-product-1" style={{backgroundImage: 'url(images/product_5.jpg)'}}>
                  <div className="desc">
                    <h2>Sound <br />on the<br />go</h2>
                  </div>
                </a>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <a href className="f-product-2" style={{backgroundImage: 'url(images/oldTv1.jpg)'}}>
                      <div className="desc">
                        <h2>New <br />Used <br />Newish</h2>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href className="f-product-2" style={{backgroundImage: 'url(images/product_12.jpg)'}}>
                      <div className="desc">
                        <h2>Focus <br />Focus <br />Focus</h2>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-12">
                    <a href className="f-product-2" style={{backgroundImage: 'url(images/home_slider_1.jpg)'}}>
                      <div className="desc">
                        <h2>Mouses <br />Cabels <br />&amp; more</h2>
                      </div>
                    </a>
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