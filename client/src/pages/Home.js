import React, { Component } from "react";
import API from "../utils/API";
import Products from "../components/Products";
import HomeHeader from "../components/HomeHeader";
import Nav from "../components/Nav";


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
      .then(res =>
        this.setState({ products: res.data })
      )
      .catch(err => console.log(err));
  };


   // -------Cart Stuff --------------------

setNavCart = () => {
  API.getSess()
  .then(res =>
    this.cartArray(res.data))
  .catch(err => console.log(err));
};

cartArray = (data) => {
  var datas = data.items;
  var work = 0;
for(var key in datas) {
  for(var ney in datas[key]) {
    if(ney === 'qty') {
      work += datas[key][ney]
    }
  }
}
  this.setState({ count: work})
}


handleChocie = (id) => {
  API.saveCart(id)
  this.setState({ count: this.state.count + 1})
  alert('Added to Cart!')
}

  render() {
    console.log()
    return (
        
       <div>
        <Nav 
        totaler={this.state.count}
        homePage={this.state.homePage}
        />
        <HomeHeader />
        <div className="colorlib-shop">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 text-center colorlib-heading">
						<h2><span>Fresh Arrivals</span></h2>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.</p>
					</div>
				</div>
				<div className="row">
        {this.state.products.slice(0,4).map(product => (
                  <Products 
                    key={product._id}
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    imageMain={"images/" + product.imageMain}
                    handleChocie={this.handleChocie}
                  />
                ))}
				</div>
			</div>
		</div>
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
          
    <div id="colorlib-intro" className="colorlib-intro" style={{backgroundImage: 'url(https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}} data-stellar-background-ratio="0.5">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="intro-desc">
                <div className="text-salebox">
                  <div className="text-lefts">
                    <div className="sale-box">
                      <div className="sale-box-top">
                        <h2 className="number">45</h2>
                        <span className="sup-1">%</span>
                        <span className="sup-2">Off</span>
                      </div>
                      <h2 className="text-sale">Sale</h2>
                    </div>
                  </div>
                  <div className="text-rights">
                    <h3 className="title">Time to Save!</h3>
                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                    <p><a href="/products" className="btn btn-primary">Shop Now</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="colorlib-testimony" className="colorlib-light-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center colorlib-heading">
              <h2><span>Our Satisfied Customer says</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">						
              <div className="owl-carousel2">
                <div className="item">
                  <div className="testimony text-center">
                    <span className="img-user" style={{backgroundImage: 'url(images/person1.jpg)'}} />
                    <span className="user">Alysha Myers</span>
                    <small>Miami Florida, USA</small>
                    <blockquote>
                      <p>" A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony text-center">
                    <span className="img-user" style={{backgroundImage: 'url(images/person2.jpg)'}} />
                    <span className="user">James Fisher</span>
                    <small>New York, USA</small>
                    <blockquote>
                      <p>One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony text-center">
                    <span className="img-user" style={{backgroundImage: 'url(images/person3.jpg)'}} />
                    <span className="user">Jacob Webb</span>
                    <small>Athens, Greece</small>
                    <blockquote>
                      <p>Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    </blockquote>
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
    );
  }
}

export default Home;
