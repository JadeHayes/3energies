import * as React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import '../static/App.css';
import logo from '../static/logo.png';

// TODO: 
// Change cover photo & everything present except for the footer to 'Home'
// Make the home page show on "/"" exact path only
// Style each component using common style
// Use react router to render components

const StyledNavLogo = styled.div`
  img {
    height: 40px;
    margin-right: 18px;
  }
`;

const StyledNav = styled.div`
  font-family: "Oxygen", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  background: #e8e8e8;
  padding: 4em 0 0 0;

  @media only screen and (max-width: 768px) {
    padding: 20px;
}

  .navbar-light .navbar-nav 
  .nav-link:focus, .navbar-light 
  .navbar-nav .nav-link:hover {
    color: rgb(56,56,56);
  }

  #dropdownRates {
    @media only screen and (max-width: 768px) {
      text-align: center;
      width: 100%;
      background-color: white;
      color: blackl;
      text-size: 14px;
    }
  }

  ul li a::after {
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    content: '';
    width: 75%;
    text-align: center;
    border-top: 0;
    height: 2px;
    max-width: 90px;
    background: #66D37E;
    margin: 0 auto;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    transform: translate3d(0, -10px, 0);

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  ul li a:hover:after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
`;

const StyledNavWrapper = styled.div`
  max-width: 1060px;
  margin: auto;
  margin-bottom: 1em;
  background: #fff;
  padding: 34px 30px;

  ul > li.has-dropdown .dropdown-menu:before {
    bottom: 100%;
    left: 40px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: rgb(216, 216, 216);
    border-width: 8px;
    margin-left: -8px;
    display: block;
    height: 16px;
    width: 16px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  *:before, *:after {
    box-sizing: border-box;
  }

  .has-dropdown:hover .dropdown-menu {
    display: block;
  }
  :selection {
    color: #fff;
    background: #66D37E;
  }

  li {
    position: relative;
  }
`;

const Wrapper = styled.div`
  background: #e8e8e8;
`;

const StyledDropDown = styled.div`
  display: none;
  line-height: 1;
  text-transform: none;
  font-size: 13px;
  letter-spacing: 0;
  width: 120px;
  box-shadow: 0px 8px 25px -9px rgba(0, 0, 0, 0.45);
  position: absolute;
  top: 40px;
  text-align: left;
  background: rgb(232, 232, 232);
  padding: 12px;
  border-radius: 3px;
  transition: 0s;
  text-align: center;
  border-color: rgb(232, 232, 232, .2);

  :hover {
    display: block;
  }

  .navbar-light .navbar-nav .nav-link {
    color: rgba(0,0,0,.95);
  }
  `;

const NavBar: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <StyledNav>
        <StyledNavWrapper className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <Link to="/#">
              <StyledNavLogo>
                <img src={logo}/>
              </StyledNavLogo>
            </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About us</Link>
              </li>
              <li className="nav-item has-dropdown">
                <Link className="nav-link dropdown-toggle" to="/rates" role="button" data-toggle="dropdown">
                  Services
                </Link>
                <StyledDropDown className="dropdown-menu" id="dropdownRates">
                <li>
                  <Link className="nav-link" to="/rates">Rates & Services</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/certificates">Gift Certificates</Link>
                </li>
                  <div className="dropdown-divider"/>
                <li>
                  <Link className="nav-link" to="/local-resources">Local Resources</Link>
                </li>
                </StyledDropDown>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonials">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </StyledNavWrapper>
      </StyledNav>
    </Wrapper>
    );
}

export default NavBar