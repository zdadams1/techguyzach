import React, { Component } from 'react'
import API from "../../utils/API";
import Products from "../../components/Products";
import Filter from "../../components/Filter";


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
  
  lessThan = () => {
    API.lessThanHundred()
      .then(res =>
        this.setState({ products: res.data })
      )
      .catch(err => console.log(err));
  };

  greatThan = () => {
    API.greatThanHundred()
      .then(res =>
        this.setState({ products: res.data })
      )
      .catch(err => console.log(err));
  };


  
  
    render() {
    console.log('meProdP ' + this.state.products)
  
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
              
              {/* <div className="row">
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
              </div> */}
            </div>
              <Filter
              lessThan={this.lessThan}
              greatThan={this.greatThan}
              loadProducts={this.loadProducts}
              />
            
          </div>
        </div>
      </div>
        </div>
       
      )
    }
  }