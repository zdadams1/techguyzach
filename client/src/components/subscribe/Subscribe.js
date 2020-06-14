import React, { Component } from 'react';
import axios from 'axios';
import './subscribe.css';
import TextFieldGroup from '../common/TextFieldGroup';
export default class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newSubscriber = {
      email: this.state.email,
    };
    axios
      .post('/api/emaillist', newSubscriber)
      .then((res) => alert('Subscribed!'))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='subscribe'>
        <h3>Be notified of new products and content.</h3>
        <form onSubmit={this.onSubmit}>
          <li>
            <input
              className='sub-email'
              name='email'
              value={this.state.email}
              onChange={this.onChange}
              type='text'
              placeholder='email'
            />
          </li>
          <li>
            <input type='submit' className='btn sub-submit-btn' />
          </li>
        </form>
      </div>
    );
  }
}
