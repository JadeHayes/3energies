import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { InnerAppWrapper, StyledGrid } from '../static/Common';
import Menu from './Menu';

const ContactUs: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace">
      <h3 className='header'>Rates + Services</h3>
      <StyledGrid>
        <Grid>
          <Row>
            <h4 className='centered'>Benefits of Therapeutic Touch</h4>
              <p>There are many beneficial effects of massage, including pain relief,
                stress reduction, and also relief of many diseases. It can be confusing 
                to know which type of massage will work best for you. The goal at 3Energies 
                Massage and Bodywork is to present our clients with the most effective techniques 
                necessary to release your tired and aching muscles. Massage styles include Swedish, 
                deep tissue, neuromuscular reprogramming, active release technique (ART) and advanced 
                stretching techniques, Esalen®, and trigger-point release; all of these techniques 
                with one goal in mind, Myofacial Release. So book an appointment today to experience 
                skillful hands that deliver a custom massage built for you to relax, restore, rejuvenate.
              </p>

              <p>Discuss with your practitioner, "What's going-on in your body?" Do a structural 
                reading to find the anatomy train of muscle continuity that may have your body locked-up. 
                Then w ork with your practitioner to determine the best approach to mindfully set the intention 
                of your session.
              </p>
              <p>And if you're expecting, "what's going-on in your body" is just the beginning of a new 
                life awareness. Pregnancy Massage is offered as a benefit to Mom for her rapidly changing 
                body. Benefits include increased blood and lymph circulation (which can reduce swelling), 
                reduced stress on weight-bearing joints, and relief from muscle cramps, spasms, and 
                myofascial pain, especially in the lower back, neck, hips, and legs. Massage and tranquil 
                relaxation will also reduced stress and provide support for the new mother with physical 
                and emotional strains.
              </p>
           </Row>
           <hr/>
           <Col xs={12} md={6}>
            <Menu/>
           </Col>
        </Grid>
      </StyledGrid>
    </div>
  </InnerAppWrapper>
)

export default ContactUs;