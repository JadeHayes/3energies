import * as React from 'react';
import styled from 'styled-components';
import cover from '../static/cover.png';
import logo from '../static/logo.png';

const StyledImg = styled.div`
  img {
    width: 100%
    display: block;
  }
`;

const StyledLogo = styled.div`
  padding-top: 20px;
  margin: auto;
  max-width: 80px;
  width: 50%;  
`;

const StyledHeaderContainer = styled.div`

  .App-header {
    text-align: center;  
    padding: 20px;
    color: #898E8C;
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  }

  .App-title {
    font-size: 30px;
  }
  
  .App-logo {
    height: 80px;
    margin-bottom: 10px;
    display: flex;
  }
`;

const CoverPhoto: React.SFC = () => (
  <StyledHeaderContainer>
    <StyledLogo>
      <img src={logo} className="App-logo" alt="logo" />
    </StyledLogo>
    <header className="App-header">
      <h1 className="App-title">3 Energies Massage & Bodywork</h1>
    </header>
    <StyledImg>
      <img src={cover}/>
    </StyledImg>
  </StyledHeaderContainer>
);

export default CoverPhoto;
