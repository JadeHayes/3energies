import * as React from 'react';
import styled from 'styled-components';
import { InnerAppWrapper } from '../static/Common';

const StyledContact = styled.div`
  font-size: 14px;
  margin-bottom: 25px;
`;

const Stylediframe = styled.iframe`
  margin-top: 25px;
  min-width: 420px;
  min-height: 250px;
  frameborder: 0;
  border: 0;
`;

const ContactInfo: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace">
      <p className="tagline">Enhance your life today!</p>
      <p>
          3Energies Massage and Bodywork recognizes that Health and Wellness 
          belongs to every Body. So book your first massage service with 
          $10.00 off with the mention that you saw it here on the website 
      </p>
      <StyledContact>
        Call directly, send me text or an email:<br/>
        <a href="tel:+16504836169">650-483-6169</a><br/>
        <a href='mailto:gina@3energiesmb.com'>gina@3energiesmb.com</a>
      </StyledContact>
      <Stylediframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.562123931905!2d-122.3983018490226!3d37.7768642197127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fd42a204f2b%3A0x630fb461d6ea9e3e!2s3+Energies+Massage+and+Bodywork!5e0!3m2!1sen!2sus!4v1541485664515"/>
    </div>
  </InnerAppWrapper>
)

export default ContactInfo;