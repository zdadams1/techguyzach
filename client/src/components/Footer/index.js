import React, { Component } from 'react'

export default class Footer extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
  

    return (
      <footer id="colorlib-footer" role="contentinfo">
      <div className="container">
        <div className="row row-pb-md">
          <div className="col-md-3 colorlib-widget">
            <h4>About Store</h4>
            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
            <p>
            </p><ul className="colorlib-social-icons">
              <li><a href="#"><i className="icon-twitter" /></a></li>
              <li><a href="#"><i className="icon-facebook" /></a></li>
              <li><a href="#"><i className="icon-linkedin" /></a></li>
              <li><a href="#"><i className="icon-dribbble" /></a></li>
            </ul>
            <p />
          </div>
          <div className="col-md-2 colorlib-widget">
            <h4>Customer Care</h4>
            <p>
            </p><ul className="colorlib-footer-links">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Returns/Exchange</a></li>
              <li><a href="#">Gift Voucher</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Special</a></li>
              <li><a href="#">Customer Services</a></li>
              <li><a href="#">Site maps</a></li>
            </ul>
            <p />
          </div>
          <div className="col-md-2 colorlib-widget">
            <h4>Information</h4>
            <p>
            </p><ul className="colorlib-footer-links">
              <li><a href="#">About us</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Order Tracking</a></li>
            </ul>
            <p />
          </div>
          <div className="col-md-2">
            <h4>News</h4>
            <ul className="colorlib-footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Exhibitions</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact Information</h4>
            <ul className="colorlib-footer-links">
              <li>291 South 21th Street, <br /> Suite 721 New York NY 10016</li>
              <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
              <li><a href="#">info@yoursite.com</a></li>
              <li><a href="#">yoursite.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              <span className="block">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with <i className="icon-heart2" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</span> 
              <span className="block"> Customized By: <a href="http://www.outcastdeveloper.com" target="_blank">OutCast Developer</a></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}