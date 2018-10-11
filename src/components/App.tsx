import * as React from 'react';
import styled from 'styled-components';
import CoverPhoto from './Header';
import Intro from './Intro'
import NavBar from './NavBar'


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
      </StyledAppDiv>
    );
  }
}

export default App;
