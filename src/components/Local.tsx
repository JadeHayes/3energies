import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { InnerAppWrapper, StyledGrid } from './Common';

const StyledA = styled.a`
  font-weight: 500;
`;

const StyledH3 = styled.h3`
  padding-bottom: 32px;
`;

const localResources: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <StyledGrid>
      <StyledH3 className='header'>Local Resources</StyledH3>
      <Grid>
        <Row>
            <Col xs={12} md={6}>
              <div>
                <h5>Wellness</h5>
                <StyledA href="www.divineessenceyoga.com">Divine Essence Yoga</StyledA>
                <p>
                  a wonderful practice to slow the mind, calm the body. The teachers are committed to 
                making yoga available to people of all physical and financial levels. Divine Essence is a donations based yoga 
                studio located at 16th & Connecticut Streets in Potrero Hill. 
                </p>
              </div>
              <div>
                <StyledA href="www.missionbaychiro.com">Mission Bay Chiropractic</StyledA>
                <p>
                  Provides gentle and precise chiropractic treatments to restore natural movement and alignment of your body. 
                </p>
              </div>
              <div>
                <StyledA href="www.dropwise.com"> Dropwise</StyledA>
                <p>
                  A San Francisco-based manufacturer of pure aromatherapy and all natural personal care products lovingly created 
                  to nourish, heal, and comfort the body, mind, and soul.
                </p>
              </div>
              <div>
                <StyledA href="www.homeability.com"> Homeability</StyledA>
                <p>
                  A resource that provides tips tricks and technology for living at home at any age.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
            <h5>Where to Eat & Stay</h5>
              <div>
                <StyledA href="go to www.marlowesf.com">Marlowe</StyledA>
                <p>
                  A fantastic rustic-chic neighborhood bistro house created by restauranteur Anna Weinberg. Executive Chef, Jennifer 
                  Puccio creates bright and bold flavors that received a three-star rating from San Francisco Chronicle food editor, 
                  Michael Bauer.
                </p>
              </div>
              <div>
                <StyledA href="downtownsanfranciscohotels.net">San Francisco Hotels</StyledA>
                <p>
                  Proud host and guide during your amazing trip in the heart of San Francisco, California. 
                </p>
              </div>
              <div>
                <StyledA href="www.ucsfhotels.com">UCSF Hotels</StyledA>
                <p>
                  A local site where travelers can find hotels near University of San Francisco campus.
                </p>
              </div>
            </Col>
        </Row>
      </Grid>
    </StyledGrid>
  </InnerAppWrapper>
);

export default localResources;
