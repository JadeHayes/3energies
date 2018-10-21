import * as React from 'react';
import styled from 'styled-components';

const StyledIntro = styled.div`
  width: 100%;
  padding: 20px 0 15px 0 ;
  background-color: white;
  margin: 0 auto;
  padding: 2em;
  display: block;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 1060px;
  font-family: "Oxygen", sans-serif;

  .header {
    font-family: "Oxygen", sans-serif;
    font-weight: 300;
    color: #44502a;
    font-size: 22px;
  }
`;
const StyledSubHeader = styled.p`
  color:#BCBCBE;
  font-style: italic;
`;

const StyledP = styled.p`
  color: #B4B7BA;
`;

const StyledLastP = styled.p`
  color: #B4B7BA;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
`;

const Intro: React.SFC = () => (
  <StyledIntro>
    <h1 className='header'>People are beings of action...</h1>
    <StyledSubHeader>because we lead such active lifestyles it is important to keep therapeutic touch in the picture </StyledSubHeader>
    <StyledP> Often times when life gets hectic we humans respond by doing everything possible to make things happen 
        and tend to neglect our own bodies. Muscles become overtaxed then fatigue sets-in and the body begins to ache,
        and the next thing you know, doing anything that requires physical or mental energy is out of the question. 
    </StyledP>
    <StyledLastP>
      "Learn to bend, it's better than breaking"
    </StyledLastP>
      <hr/>
  </StyledIntro>
);

export default Intro;
