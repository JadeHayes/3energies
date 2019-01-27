import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { ColWrapper, InnerAppWrapper, StyledGrid } from '../static/Common';
import BethAbout from './BethAbout';
import GinaAbout from './GinaAbout';

const StyledCol= styled(Col)`
  text-align: center;
`;

const StyledHr = styled.hr`
  margin-top: 3em;
  width: 80%;
`;

const StyledH3 = styled.h3`
  font-family: Fjalla One;
  font-weight: bold;
  font-style: italic;
  font-size: 30px;
  text-align: center;
  margin-top: .5em;
`;

const StyledP = styled.p`
  text-align: center;
`;

const StyledContainer = styled.p`
  padding: 2em;
`;

const MissionStatement = styled.div`
  margin-top: 1em;
`;

 
const AboutUs: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace">
      <StyledH3>About Us</StyledH3>
      <StyledP className="tagline">Enhance life with therapeutic touch and awareness one massage at a time</StyledP>
      <StyledContainer className='container'>The philosophy of 3Energies Massage & Bodywork is to provide the local 
      community with therapeutic massage designed specifically for your individual needs. In addition to massage, 
      we present each person with the findings and knowledge about their body to bring awareness to better support 
      and maintain their anatomical structure. 
      <MissionStatement>
        Our Mission Statement:<br/>
        <i>Enhance life with therapeutic touch and awareness one massage at a time.</i>
      </MissionStatement>
      </StyledContainer>
      
      <StyledHr/>
      <StyledGrid>
        <Grid>
          <Row>
              <StyledCol xs={8} md={6}>
                <ColWrapper>
                  <GinaAbout/>
                </ColWrapper>
              </StyledCol>
              <StyledCol xs={8} md={6}>
                <ColWrapper>
                  <BethAbout/>
                </ColWrapper>
              </StyledCol>
          </Row>
        </Grid>
      </StyledGrid>
    </div>
  </InnerAppWrapper>
)

export default AboutUs;