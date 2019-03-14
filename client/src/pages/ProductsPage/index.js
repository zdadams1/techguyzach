import React, { Component } from 'react'
import API from "../../utils/API";
import Products from "../../components/Products";
import Filter from "../../components/Filter";
import Nav from "../../components/Nav";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './style.css'


export default class ProductPage extends Component {
  state = {
    products: [],
    orginalProducts: [],
    leftOvers: [],
    count: 0,
    selected1: 'defaultedChecked',
    productsPage: 'active'
  };

  componentDidMount() {
    this.loadProducts();
    this.setNavCart();
  }

//Loads Products
  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data, orginalProducts: res.data })
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
  this.setState({ count: this.state.count + 1})
  alert('Added to Cart!')
}

//Filter

filters = (category) => {

  console.log(category)

  if(category === 'random') {
    this.loadProducts()
  }else if(category === 'more') {
    API.getProducts()
    .then(res => 
      this.setState({ products: this.state.products.concat(res.data)}))
    .catch(err => console.log(err))
  }else {
    API.filtered(category)
  .then(res =>
    this.setState({ products: res.data, orginalProducts: res.data }))
  .catch(err => console.log(err))
  }
};
  
  // lessThan = () => {
  //   this.setState({ currRange: 'lessThen' })
  //   const lessThen = this.state.products.filter(word => word.price < 100)
  //   const greatThen = this.state.products.filter(word => word.price > 100)

  //   if(this.state.leftOvers.length <= 0) {
  //     this.setState({ products: lessThen })
  //     this.setState({ leftOvers: greatThen })
  //   }else {
  //     this.setState({ products: this.state.leftOvers })
  //     this.setState({ leftOvers: greatThen })
  //   }
    
  // };

  // greatThan = (opt) => {
  //   const greatThen = this.state.products.filter(word => word.price > 100)
  //   const lessThen = this.state.products.filter(word => word.price < 100)

  //   if(this.state.leftOvers.length <= 0) {
  //     this.setState({ products: greatThen })
  //     this.setState({ leftOvers: lessThen })
  //   }else {
  //     this.setState({ products: this.state.leftOvers })
  //     this.setState({ leftOvers: lessThen })
  //   }
    
  // };

  // reLoadAllProducts = () => {
  //   this.setState({ products: this.state.orginalProducts })
  // }

  // priceFilter = (range) => {
  //   console.log(range)
  //   this.setState({ radioBtn2: null })
  //   var greatThen = this.state.products.filter(word => word.price > 100)
  //   var lessThen = this.state.products.filter(word => word.price < 100)

   

  //   if(range === 'lessthen') {
  //     this.setState({ products: lessThen })
  //   }else if (range === 'greatThen') {
  //     this.setState({ products: greatThen })
  //   }
  // }


  
  
    render() {
    console.log(this.state.products)
  
      return (

        <div>
          <Nav 
          totaler={this.state.count}
          productsPage={this.state.productsPage}
           />
       
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


            <CSSTransitionGroup
            transitionName="products"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            >
            {this.state.products.map(product => (
                  <Products 
                    key={product._id}
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    imageMain={"images/" + product.imageMain}
                    handleChocie={this.handleChocie}
                  />
                ))}
              </CSSTransitionGroup>
           
            </div>
              <Filter
             
              filters={this.filters}
              />
            
          </div>
        </div>
      </div>
        </div>
        </div>
      )
    }
  }