import React, { Component } from "react";
import API from "../../utils/API";


class SignIn extends Component {
    state = {
      products: []
    };
  
    componentDidMount() {
      this.loadProducts();
      console.log(this.state.products)
    }
  
    loadProducts = () => {
      API.getSignin()
        .then(res =>
          this.setState({ products: res.data })
        )
        .catch(err => console.log(err));
    };
  
    
   
  
    render() {
      console.log(this.state.products)
      return (
<div>
      <h1>SignIn Page</h1>
           
    </div>
      )
    
    }
}

export default SignIn;