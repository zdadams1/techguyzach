import React, { Component } from 'react';

export default class HomeHeader extends Component {
  state = {};

  render() {
    return (
      <div>
        <aside id='colorlib-hero'>
          <div className='flexslider'>
            <ul className='slides'>
              <li
                style={{
                  backgroundImage:
                    'url(https://clip.cookdiary.net/sites/default/files/wallpaper/cpu-clipart/418575/cpu-clipart-modern-computer-418575-4275141.png)'
                }}
              >
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-pull-2 col-sm-12 col-xs-12 slider-text'>
                      <div className='slider-text-inner'>
                        <div className='desc'>
                          <h1 className='head-1'>Computers</h1>
                          <h2 className='head-2'>
                            Custom built computers
                          </h2>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage:
                    'url(https://clsimplex.com/images/releases/headers/quality-code.jpg)'
                }}
              >
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-pull-2 col-sm-12 col-xs-12 slider-text'>
                      <div className='slider-text-inner'>
                        <div className='desc'>
                          <h1 className='head-1'>
                            Websites, Apps and Advertising
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage:
                    'url(https://go.tjc.edu/wp-content/uploads/2017/10/tutoring-1480x650.jpg)'
                }}
              >
                <div className='overlay' />
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 slider-text'>
                      <div className='slider-text-inner'>
                        <div className='desc'>
                          <h1 className='head-1'></h1>
                          <h2 className='head-2'>Tutoring</h2>
                          <p className='category'>
                            <span>
                              Chemistry, Physics, Math, Computer Science
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}
