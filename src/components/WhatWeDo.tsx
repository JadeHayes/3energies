import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { StyledGrid } from '../static/Common';

const WhatWeDo: React.SFC<{}> = () => (
  <StyledGrid>
    <Grid>
      <Row>
          <Col xs={12} md={6}>
            <h3 className='header'>What We Do</h3>
              <h5>Massage massage massage & bodywork</h5>
                <p>And how does this differ from the massage guys down the block? Well, It's all about Myofacial Release. 
                  As Trigger-Point Release Specialists our objective is to release locked muscles in the most effective means 
                  possible icluding Active Release (ART), Traeggers, Swedish, and Esalen. We work on clients with varying 
                  degrees of pain including muscular schlerosis, fibromyalgia, post-polio symptoms, carpal-tunnel, locked necks, 
                  frozen shoulders, neuromuscular reprogramming of the psoas, repetitive strain, athletes in training, and even 
                  regular bodies with chronic pain and aching muscles. Practitioners have a vast understanding of human anatomy and the 
                  mechanics of how one muscle can affect other muscles or entire regions of the body. In knowing this, we work the muscles 
                  responsible for the pain."Yes! This is deep-tissue work, although in reality 'deep' work doesn't have to hurt people, fast 
                  work hurts people." So if you want an effective massage to alleviate your aches and pains without being worked-over, 
                  or receive the best-of-the-best in relaxation massage, come to 3 Energies Massage and Bodywork.</p>
          </Col>
        <Col xs={12} md={6}>
          <h3 className='header'>Wellness All the Way Around</h3>
            <p>
              <b>Birthday Offerings</b> ~ All existing clients can book a 60–minute massage during your birthday month and receive 
              that session for $85. That's right, you can book as many 60-minute massages for yourself during your birthday 
              month at 30% off per session. So treat yourself to what's really important, your health and well-being!
           </p>
           <p>
               <b>Refer a Friend</b> ~ The best advertisement that we can receive is often referrals from our clients. 
               Refer 3-clients and your 1.5-hour massage will be done at the cost of a 1-hour session. 
               Oh it gets better than that! If your appointment is booked during your Birthday Month, 
               your 90-minute session is $85.
          </p>
          <div className='location'>
            <p>We are located in Mission Bay Chiropractic where services are available, such as:</p>
              <ul>
                <li>Chiropractic examinations & adjustments</li>
                <li> Health & Wellness Report</li>
              </ul>
                  Hours of Operation:
                  Mon - Fri:  10:00am – 6:00pm
                  Sat & Sun: by appointment only
                  Call text or email for an appt today:
                  650-483-6169  –or–  gina@3energiesmb.com
              <i>Gift Certificates available</i>
          </div>
        </Col>
      </Row>
    </Grid>
  </StyledGrid>
);

export default WhatWeDo;
