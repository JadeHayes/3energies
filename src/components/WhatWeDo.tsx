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

  .header {
    font-family: Fjalla One;
    color: #44502a;
    font-weight: bold;
    font-style: italic;
    font-size: 30px;
  }
`;

const StyledP = styled.p`
  color: #B4B7BA;
`;

const WhatWeDo: React.SFC = () => (
    <StyledIntro>
      <h3 className='header'>What We Do</h3>
        <h5>Massage massage massage & bodywork</h5>
          <StyledP>And how does this differ from the massage guys down the block? Well, It's all about Myofacial Release. 
            As Trigger-Point Release Specialists our objective is to release locked muscles in the most effective means 
            possible icluding Active Release (ART), Traeggers, Swedish, and Esalen. We work on clients with varying 
            degrees of pain including muscular schlerosis, fibromyalgia, post-polio symptoms, carpal-tunnel, locked necks, 
            frozen shoulders, neuromuscular reprogramming of the psoas, repetitive strain, athletes in training, and even 
            regular bodies with chronic pain and aching muscles. Practitioners have a vast understanding of human anatomy and the 
            mechanics of how one muscle can affect other muscles or entire regions of the body. In knowing this, we work the muscles 
            responsible for the pain."Yes! This is deep-tissue work, although in reality 'deep' work doesn't have to hurt people, fast 
            work hurts people." So if you want an effective massage to alleviate your aches and pains without being worked-over, 
            or receive the best-of-the-best in relaxation massage, come to 3 Energies Massage and Bodywork.</StyledP>
    </StyledIntro>
);

export default WhatWeDo;
