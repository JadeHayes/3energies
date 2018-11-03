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
  font-size: 14px;
  line-height: 1.7;
  color: gray;
  background: #e8e8e8;
  padding: 5em 0 0 0;

  .navbar-light .navbar-nav 
  .nav-link:focus, .navbar-light 
  .navbar-nav .nav-link:hover {
    color: rgb(56,56,56);
  }

  ul li a::after {
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    content: '';
    width: 80%;
    height: 2px;
    background: #66D37E;
    margin: 0 auto;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    transform: translate3d(0, -10px, 0);
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rates">Rates & Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonials">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/local-resources">Local Resources</Link>
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