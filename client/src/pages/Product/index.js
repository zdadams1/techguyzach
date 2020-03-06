import React, { Component } from 'react';
import API from '../../utils/API';
import AddToCart from '../../components/AddCartBtn';
import Nav from '../../components/Nav';

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
      .then(res => this.setState({ product: res.data }))
      .catch(err => console.log(err));
  };

  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ products: res.data }))
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
      .then(res => this.cartArray(res.data))
      .catch(err => console.log(err));
  };

  cartArray = data => {
    var datas = data.items;
    var final = [];
    var work = 0;
    for (var key in datas) {
      for (var ney in datas[key]) {
        console.log(datas[key][ney]);
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
    console.log(this.state.product._id);

    return (
      <div>
        <Nav totaler={this.state.count} />

        <div>
          <div className='colorlib-shop'>
            <div className='container'>
              <div className='row row-pb-lg'>
                <div className='col-md-10 col-md-offset-1'>
                  <div className='product-detail-wrap'>
                    <div className='row'>
                      <div className='col-md-5'>
                        <div className='product-entry'>
                          <div
                            className='product-img'
                            style={{
                              backgroundImage:
                                'url(' +
                                '../../images/' +
                                this.state.product.imageMain +
                                ')'
                            }}
                          >
                            <p className='tag'>
                              <span className='sale'>Sale</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-7'>
                        <div className='desc'>
                          <h3>{this.state.product.name}</h3>
                          <p className='price'>
                            <span>${this.state.product.price}</span>
                          </p>
                          <p>{this.state.product.description}</p>
                          <div className='row row-pb-sm'>
                            <div className='col-md-4'>
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
                              <AddToCart
                                id={this.state.product._id}
                                handleChocie={this.handleChocie}
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
        </div>
      </div>
    );
  }
}
