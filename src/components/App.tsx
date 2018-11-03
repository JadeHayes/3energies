import * as React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar'

// TODO: Set up this template
// http://demo.themewagon.com/preview/download-free-responsive-html5-portfolio-template
const StyledAppWrapper = styled.div`
  background: #e8e8e8;
  width: 100%;
  height: 100%
`;

const StyledAppDiv = styled.div`
  .App {
    text-align: center;

  #page {
    position: relative;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }

  div {
    display: block;
  }

  body {
    font-family: "Oxygen", sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.7;
    color: gray;
    background: #e8e8e8;
  }
`;

const StyledNavBar = styled(NavBar)`
  margin: 5em 0 0 0;
`;



class App extends React.Component {
  public render() {
    return (
        <StyledAppWrapper>
          <StyledAppDiv className="App" id="page">
            <StyledNavBar/>
          </StyledAppDiv>
        </StyledAppWrapper>
    );
  }
}

export default App;
