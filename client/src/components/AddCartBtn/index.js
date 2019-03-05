import React, { Component } from 'react'


export default class AddToCart extends Component {


  render() {
  

    return (


        <div>
            <p><div className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart" 
            onClick={() => this.props.handleChocie(this.props.id)} /> 
                      Add to Cart</div></p>
        </div>
      
    )
  }
}