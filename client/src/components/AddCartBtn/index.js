import React, { Component } from 'react';

export default class AddToCart extends Component {
  render() {
    return (
      <div onClick={() => this.props.handleChocie(this.props.id)}>
        <p>
          <div className='btn btn-primary btn-addtocart addtocart'>
            <i className='icon-shopping-cart' />
            Add to Cart
          </div>
        </p>
      </div>
    );
  }
}
