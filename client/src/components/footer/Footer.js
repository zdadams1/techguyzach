import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
  render() {
    const footer = (
      <ul className='footer-menu'>
        <li className='footer-item'>
          <h3>Info</h3>
          <p>
            My name is Zach Adams and I make Computers and software to make
            lives better.
          </p>
          <p>zach@techguyzach.com</p>
        </li>
      </ul>
    );
    return <div className='app-footer pt-3 text-center'>{footer}</div>;
  }
}

export default Footer;

// have the footer be the user bar
