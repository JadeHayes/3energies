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
                <a className="nav-link" id="bootstrap-overrides" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="bootstrap-overrides" href="#">Rates & Services</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="bootstrap-overrides navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  About Us
                </a>
                  <div className="dropdown-menu"  aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" id="bootstrap-overrides" href="#">Contact Us</a>
                    <a className="dropdown-item" id="bootstrap-overrides" href="#">Testimonials</a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" id="bootstrap-overrides" href="#">Local Resources</a>
                  </div>
              </li>
            </ul>
          </div>
        </StyledNavWrapper>
      </StyledNav>
    </Wrapper>
    );

export default NavBar;
