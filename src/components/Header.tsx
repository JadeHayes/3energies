import * as React from 'react';
import styled from 'styled-components';
import cover from '../static/cover.png';


const StyledImg = styled.div`
  img {
    width: 100%
    opacity: .8;
    display: block;
  }
`;

const StyledContainer = styled.div`
  font-family: "Oxygen", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.7;
  color: gray;
  align-items: center;
  
  .whitespace {
    background-color: white;
    margin: 0 auto;
    display: block;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 1060px;
    padding: 2em;
  }

  .App-header {
    text-align: center;  
    padding: 20px;
    color:  gray;
  }

  .App-title {
    font-size: 24px;
    font-weight: 320;
    font-style: italic;
    line-height: 1.7;
    color: gray;
    font-family: "Oxygen", sans-serif;
  }
  
  .App-logo {
    height: 80px;
    margin-bottom: 10px;
    display: flex;
  }


`;

const CoverPhoto: React.SFC = () => (
  <StyledContainer>
    <div className='whitespace'>
      <header className="App-header">
        <h1 className="App-title">3 Energies Massage & Bodywork</h1>
      </header>
      <StyledImg>
        <img src={cover}/>
      </StyledImg>
    </div>
  </StyledContainer>
);

export default CoverPhoto;
