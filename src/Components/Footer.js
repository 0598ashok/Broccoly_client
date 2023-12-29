import React from "react";
import "../css/Footer.css";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>Sign up to receive diet tips and exclusive offers</h4>
            </div>

			
            <div className="col-md-6">
              <div class="input-group mb-3 input-group-lg">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                />
                <div class="input-group-append">
                  <span class="input-group-text">Submit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="footer_container footer_row">
          <div class="footer_col">
            <h4>Customer Service</h4>
            <ul class="footer_list">
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/login">My Account</Link>
              </li>
            </ul>
          </div>
          <div class="footer_col">
            <h4>About us</h4>
            <ul class="footer_list">
              <li>
                <Link to="/about">About Broccoly</Link>
              </li>
              <li>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div class="footer_col">
            <h4>Here to help</h4>
            <ul class="footer_list">
              <li>
                <Link to="/delivery-returns">Delivery & Returns</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/security">Security</Link>
              </li>
            </ul>
          </div>
          <div class="footer_col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
