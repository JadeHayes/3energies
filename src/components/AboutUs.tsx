import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import BethAbout from './BethAbout';
import { InnerAppWrapper, StyledGrid } from './Common';
import GinaAbout from './GinaAbout';

const AboutUs: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace">
      <h3 className='header'>About Us</h3>
      <p>The philosophy of 3Energies Massage & Bodywork is to provide the local community with therapeutic massage designed specifically for your individual needs.
      In addition to massage, we present each person with the findings and knowledge about their body to bring awareness to better support and maintain their anatomical structure. </p>
      <p>Our Mission Statement:</p>
      <p className="tagline">Enhance life with therapeutic touch and awareness one massage at a time</p>
      <StyledGrid>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <GinaAbout/>
            </Col>
            <Col xs={12} md={6}>
              <BethAbout/>
            </Col>
          </Row>
        </Grid>
      </StyledGrid>
    </div>
  </InnerAppWrapper>
)

export default AboutUs;