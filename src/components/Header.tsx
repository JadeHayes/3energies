import * as React from 'react';
import styled from 'styled-components';
import { InnerAppWrapper } from '../static/Common';
import cover from '../static/cover.png';
import Intro from './Intro';
import WhatWeDo from './WhatWeDo';

const StyledImg = styled.div`
  img {
    width: 100%
    opacity: .8;
    display: block;
  }
`;

const StyledP = styled.p`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  margin-bottom: 1.5em;
`;

const StyledHeader = styled.header`
  text-align: center;  
  padding: 20px 20px 0px 20px;
`;

const CoverPhoto: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className='whitespace'>
      <StyledHeader>
        <h1 className="App-title">3 Energies Massage & Bodywork</h1>
      </StyledHeader>
      <StyledP>
        "Learn to bend, it's better than breaking"
      </StyledP>
      <StyledImg>
        <img src={cover}/>
      </StyledImg>
      <Intro/>
      <hr/>
      <WhatWeDo/>
    </div>
  </InnerAppWrapper>
);

export default CoverPhoto;
