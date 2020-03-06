import React, { Component } from 'react';

export default class Footer extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    return (
      <footer id='colorlib-footer' role='contentinfo'>
        <div className='container'>
          <div className='row row-pb-md items'>
            <div className='col-md-3 colorlib-widget'>
              <h4>About Me</h4>
              <p>
                I make computers and software to help people with their lives.
              </p>
              <p></p>
              <ul className='colorlib-social-icons'>
                <li>
                  <a href='#'>
                    <i className='icon-facebook' />
                  </a>
                </li>
              </ul>
              <p />
            </div>
            <div className='col-md-2 colorlib-widget'>
              <h4>Information</h4>
              <p></p>
              <ul className='colorlib-footer-links'>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
              </ul>
              <p />
            </div>
            <div className='col-md-3'>
              <h4>Contact Information</h4>
              <ul className='colorlib-footer-links'>
                <li>
                  <a href='tel://1234567920'>+1 209 202 4527</a>
                </li>
                <li>
                  <a href='#'>zach@techguyzach.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
