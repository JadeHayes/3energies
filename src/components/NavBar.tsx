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
    background-color: rgb(210, 171, 128, .28);
    font-style: helvetica;
    margin-top: 20px;

    #bootstrap-overrides {
      color: grey;

      &:hover .show> {
        color: rgb(150,150,149);
      }
    }
`;

const NavBar: React.SFC = () => (
    <StyledNav className="navbar navbar-expand-lg navbar-light">
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
    </StyledNav>
    );

export default NavBar;
