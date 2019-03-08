import React, { Component } from 'react'


export default class Products extends Component {


  render() {
  

    return (
    

        <div className="col-md-3 text-center">
        <div className="product-entry">
          <div className="product-img" style={{backgroundImage: "url(" + this.props.imageMain + ")"}}>
            {/* <p className="tag"><span className="new">Sale</span></p> */}
            <div className="cart">
              <p>
                <span className="addtocart"><a onClick={() => this.props.handleChocie(this.props.id)}><i className="icon-shopping-cart"></i></a></span> 
                <span><a href={'products/' + this.props.id}><i className="icon-eye"></i></a></span> 
              </p>
            </div>
          </div>
          <div className="desc">
            <h3><a href={'products/' + this.props.id}>{this.props.name}</a></h3>
            <p className="price"><span>${this.props.price}</span></p>
          </div>
        </div>
        </div>
      
    )
  }
}