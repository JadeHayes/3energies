import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { InnerAppWrapper, StyledGrid } from './Common';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactUs: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace">
      <h3 className='header'>Contact Us</h3>
      <StyledGrid>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <ContactInfo/>
            </Col>
            <Col xs={12} md={6}>
              <ContactForm/>
            </Col>
          </Row>
        </Grid>
      </StyledGrid>
    </div>
  </InnerAppWrapper>
)

export default ContactUs;