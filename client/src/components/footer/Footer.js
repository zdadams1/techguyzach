import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
  render() {
    const footer = (
      <ul className='footer-menu'>
        <li className='footer-button'>
          <Link className='f-coins f-btn' to='/about'>
            About <i className='fas fa-user' />
          </Link>
        </li>
      </ul>
    );
    return <div className='app-footer pt-3 text-center'>{footer}</div>;
  }
}

export default Footer;

// have the footer be the user bar
