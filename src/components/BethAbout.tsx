import * as React from 'react';
import beth from '../static/beth.png';
import { InnerAppWrapper, StyledImg } from './Common';

const BethAbout: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="light-background">
      <StyledImg>
        <img src={ beth }/>
      </StyledImg>
      <p className="title">Meet the Practitioners</p>
      <p>
        Beth O'Boyle is our well-grounded world traveler. After living abroad for years, she came to California 
        to study Clinical Deep Tissue and Sports Massage. Additionally, with Cancer massage, pre/post surgical, 
        and prenatal massage, she encompasses a balanced variety of techniques essential for releasing tension 
        and improving overall physical movement. Beth loves to traveland incorporates that into her practice by 
        traveling locally to each of her clients. She is Nationally Certified and has worked in the Bay Area for 
        over 3 years, recently training in Australia in the Brandon Raynor method of massage. Beth is dedicated 
        to the continual learning of human anatomy, has a passion for bodywork, and focuses on bettering your 
        overall physical performance.
      </p>
      <p>
        If you are in need of massage or bodywork and would like to stay in the comfort of your home, contact Beth 
        for an In-Home Massage. Dedicated athletes and people training for a marathon or triathlon can improve your 
        personal performance with Sports massage and stretching. Better yet, have the session done in your home.
      </p>
      <p>
        Serving the Peninsula for In-home Massage from San Francisco to San Jose. Call for a consultation and 
        appointment M–F 10am–6pm.
      </p>
      <p className="contact-info">
        Beth O'Boyle, NCMT <br/>
        <a href="mailto:bethoboy@3energiesmb.com?subject=3Energies MB Inquiry">bethoboy@3energiesmb.com</a>
        <p>408.728.0262</p>
      </p>
    </div>
  </InnerAppWrapper>
)

export default BethAbout;