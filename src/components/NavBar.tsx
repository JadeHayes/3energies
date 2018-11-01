import * as React from 'react';
import styled from 'styled-components';
import '../static/App.css';
import logo from '../static/logo.png';

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
  margin: 0 auto;
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

const NavBar: React.SFC = () => (
    <Wrapper>
      <StyledNav>
        <StyledNavWrapper className="navbar navbar-expand-lg navbar-light">
          <StyledNavLogo>
            <img src={logo}/>
          </StyledNavLogo>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Rates & Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Local Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </StyledNavWrapper>
      </StyledNav>
    </Wrapper>
    );

export default NavBar;
