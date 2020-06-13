import React, { Component } from 'react';
import jtlogo from '../../images/jt-logo.png';
import blockstarlogo from '../../images/blockstar-logo.png';
import planmelogo from '../../images/planmelogo.png';
import Nav from '../Nav';
import Footer from '../footer/Footer';
import './apps.css';

export default class Apps extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div className='apps '>
          <div className=' apps-header'>
            <div className=''>
              <h1>Software</h1>
              <p>My custom built Applications.</p>
            </div>
          </div>
          <ul className='apps'>
            <li className='jt-li'>
              <li>
                <img src={jtlogo} />
              </li>
              <li>
                <h1>JobTrade</h1>
              </li>
              <li>
                <p>Buy, sell, work and chat with people in your area.</p>
              </li>
            </li>
            <li className='pm-li'>
              <li>
                <img src={planmelogo} />
              </li>
              <li>
                <h1>PlanMe</h1>
              </li>
              <li>
                <p>
                  Plan your life and be more successful. Todo's, meal and
                  excersize planner and budgeter.
                </p>
              </li>
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
        <Footer />
      </div>
    );
  }
}
