import React from "react";
import "../css/Navbar.css";
import { ImHeadphones } from "react-icons/im";
import{ Link} from "react-router-dom"
import logo from "../images/logo white bg.png";

const Navbar = () => {
 
  const handleLinkClick = () => {
   
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="container">
        <nav
          className="navbar navbar-expand-md fixed-top BroccolyNavContainer"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container BroccolyHeaderContainer ">
            <button
              className="navbar-toggler p-0"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <i class="fa-solid fa-bars nav_toggke_icon"></i>
            </button>

            <div className="">
              <Link
                className="navbar-brand BroccolyLogo "
                style={{ color: "#b6cc00" }}
                to="/"
              >
                <img src={logo} />
              </Link>
            </div>

            <div className=" HeaderCallcontainer  order-lg-2 order-md-2 order-sm-2">
              <a
                className="NavCall navbar-brand text-auto ml-lg-4 ml-sm-1 "
                href="Tel:0123456789"
                type="tel"
                style={{ color: "#b6cc00" }}
              >
                <ImHeadphones />
                <span className="callNumber">Call us </span>
              </a>
            </div>

            <div
              className="collapse navbar-collapse  HeaderMenuContainer order-lg-3 order-md-3 order-sm-5 "
              id="collapsibleNavbar"
            >
              <div className="HeaderCallcontainerToggler">
                <a
                  className=" navbar-brand ml-lg-4 ml-sm-1"
                  href="Tel:0123456789"
                  type="tel"
                  style={{ color: "#b6cc00" }}
                >
                  Call us <span style={{ color: "#660033" }}>0123456789</span>
                </a>
              </div>

              <div>
                <ul className="navbar-nav">
                  <li className="nav-item navItemsAli">
                    <Link className="nav-link menuText" to="/diet-plans" 
                    onClick={() => handleLinkClick()}>
                      Diet Plans
                    </Link>
                  </li>
                  <li className="nav-item navItemsAli">
                    <Link className="nav-link menuText" to="/diet-meals"  onClick={() => handleLinkClick()}>
                      Diet Meals
                    </Link>
                  </li>
                  <li className="nav-item navItemsAli">
                    <Link className="nav-link menuText" to="/how-it-works" onClick={() => handleLinkClick()}>
                      How it Works
                    </Link>
                  </li>
                  <li className="nav-item navItemsAli">
                    <Link className="nav-link menuText" to="/reviews" onClick={() => handleLinkClick()}>
                      Reviews
                    </Link>
                  </li>
                  <li className="nav-item navItemsAli">
                    <Link className="nav-link menuText" to="/bmi-calculator" onClick={() => handleLinkClick()}>
                      BMI Calculator
                    </Link>
                  </li>
                  <li className="nav-item navItemsAli">
                    <Link className="nav-link menuText" to="/login" onClick={() => handleLinkClick()}>
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
