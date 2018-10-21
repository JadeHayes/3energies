import * as React from 'react';
import styled from 'styled-components';
import CoverPhoto from './Header';
import Intro from './Intro'
import NavBar from './NavBar'
import WhatWeDo from './WhatWeDo'
// TODO: Set up this template
// http://demo.themewagon.com/preview/download-free-responsive-html5-portfolio-template

const StyledAppDiv = styled.div`
  .App {
    text-align: center;
  }
`;


class App extends React.Component {
  public render() {
    return (
      <StyledAppDiv className="App">
        <CoverPhoto/>
        <NavBar/>
        <Intro/>
        <WhatWeDo/>
      </StyledAppDiv>
    );
  }
}

export default App;
