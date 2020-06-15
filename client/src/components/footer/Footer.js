import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import sendMessage from '../../actions/userActions';
import './footer.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      description: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      description: this.state.description,
    };
    axios.post('/api/message', newMessage).then((response) => {
      alert('Message Sent.');
      this.resetForm();
    });
  };
  resetForm() {
    document.getElementById('contact-form').reset();
  }
  render() {
    const footer = (
      <ul className='footer-menu'>
        <li className='footer-item'>
          <p>I'm Tech Guy Zach and I make technology to improve lives.</p>
          <button
            data-toggle='collapse'
            href='#contact-form'
            role='button'
            aria-expanded='false'
            aria-controls='collapse'
            className='btn btn-lg show-form footer-button'
          >
            Contact
          </button>
          <div className='email'>
            <form
              id='contact-form'
              className='collapse'
              onSubmit={this.onSubmit.bind(this)}
              method='POST'
            >
              <div className='form-group'>
                <label>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='firstname'
                  value={this.state.firstname}
                  onChange={this.onChange}
                  id='firstname'
                />
              </div>
              <div className='form-group'>
                <label>Last Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='lastname'
                  name='lastname'
                  value={this.state.lastname}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <label>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group'>
                <label>Message</label>
                <textarea
                  className='form-control'
                  rows='5'
                  name='description'
                  value={this.state.description}
                  onChange={this.onChange}
                  id='message'
                ></textarea>
              </div>
              <button type='submit' className='btn footer-button f-btn-2 mb-3'>
                Submit
              </button>
            </form>
          </div>
        </li>
      </ul>
    );
    return <div className='app-footer pt-3 text-center'>{footer}</div>;
  }
}

export default Footer;

// have the footer be the user bar
