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
    font-size: 22px;
  }
`;
const StyledSubHeader = styled.p`
  font-style: italic;
  text-align: center;
  margin-bottom: 2em;
  color: rgb(64, 64, 64);
`;


const Intro: React.SFC = () => (
  <StyledIntro>
    <h1 className='header'>People are beings of action...</h1>
    <StyledSubHeader>we lead such active lifestyles it is important to keep therapeutic touch in the picture </StyledSubHeader>
    <p> Often times when life gets hectic we humans respond by doing everything possible to make things happen 
        and tend to neglect our own bodies. Muscles become overtaxed then fatigue sets-in and the body begins to ache,
        and the next thing you know, doing anything that requires physical or mental energy is out of the question. 
    </p>
  </StyledIntro>
);

export default Intro;
