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


const StyledDiv = styled.div`
  text-align: center;
  font-weight: bold;
  font-style: italic;
`;

const SmallText = styled.div`
  text-align: center;
  font-size: 10px;
`;

const Intro: React.SFC = () => (
  <StyledIntro>
    <h1 className='header'>People are beings of action...</h1>
    <StyledSubHeader>We lead such active lifestyles it is important to keep therapeutic touch in the picture </StyledSubHeader>
    <p> Practitioners have a vast understanding of human anatomy and the mechanics of how one muscle can affect other muscles 
      or entire regions of the body. In knowing this, we work the muscles responsible for the pain. It is our objective 
      to release locked muscles in the most effective means possible. We work on clients with varying degrees of pain 
      including muscular schlerosis, fibromyalgia, post-polio symptoms, carpal-tunnel, locked necks, frozen shoulders, 
      neuromuscular reprogramming of the psoas, repetitive strain, athletes in training, and even regular bodies with 
      chronic pain and aching muscles. "Yes! This is deep-tissue work, although in reality 'deep' work doesn't have to 
      hurt people, fast work hurts people." So if you want an effective massage to alleviate your aches and pains without 
      being worked-over, or want to receive the best-of-the-best in relaxation massage, come to 3 Energies Massage and 
      Bodywork.
    </p>
    <StyledDiv>3 Energies Massage & Bodywork recognizes that Health and Wellness belongs to every Body! So book your first 1-hour massage with $10 off
    </StyledDiv>
    <SmallText>(just mention you read it on the website)</SmallText>

  </StyledIntro>
);

export default Intro;
