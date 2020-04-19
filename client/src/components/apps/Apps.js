import React, { Component } from 'react';
import jtlogo from '../../images/jt-logo.png';
import blockstarlogo from '../../images/blockstar-logo.png';
import Nav from '../Nav';
import './apps.css';

export default class Apps extends Component {
  render() {
    return (
      <div className='apps container'>
        <Nav />
        <div className='card apps-header'>
          <div className='card-body'>
            <h1>Software</h1>
            <p>My custom built Applications.</p>
          </div>
        </div>
        <ul className='apps'>
          <li>
            <img src={jtlogo} />
          </li>
          <li>
            <h1>JobTrade</h1>
          </li>
          <li>
            <p>Buy, Sell, Work and chat with people in your area.</p>
          </li>
          <li>
            <img src={blockstarlogo} />
          </li>
          <li>
            <h1>Blockstar</h1>
          </li>
          <li>
            <p>Earn points for lining up 4 colors in a row.</p>
          </li>
          <li>
            {' '}
            <div className='card apps-donate'>
              <div className='card-body'>
                <h1>Coming Soon!</h1>
                <a href='https://paypal.me/hypenac' className='donate-btn'>
                  Donate
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
