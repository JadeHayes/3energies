import * as React from 'react';
import styled from 'styled-components';
import cover from '../static/cover.png';
import { InnerAppWrapper } from './Common';

const StyledImg = styled.div`
  img {
    width: 100%
    opacity: .8;
    display: block;
  }
`;

const StyledP = styled.p`
  color: #B4B7BA;
  font-size: 16px;
  font-style: italic;
`;

const CoverPhoto: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className='whitespace'>
      <header className="App-header">
        <h1 className="App-title">3 Energies Massage & Bodywork</h1>
      </header>
      <StyledP>
      "Learn to bend, it's better than breaking"
    </StyledP>
      <StyledImg>
        <img src={cover}/>
      </StyledImg>
    </div>
  </InnerAppWrapper>
);

export default CoverPhoto;
