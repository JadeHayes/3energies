import * as React from 'react';
import { Col, Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import { certificates } from '../static/certificates';
import { InnerAppWrapper } from '../static/Common';

const StyledCert = styled.img`
  height: 126px
  width: 297px
  }
  .box>* {
    flex: 1 1 80px;
  }
}
`;

const CertContainer = styled.div`
  margin-top: 1em;
`;

const Certs = styled.div`
  margin-top: 3em;
`;

const Title = styled.div`
  margin-bottom: 1em;
`;

const certificateMap = () => {
  return (
    <div className="certificates">
      {
        certificates.map((cert, index) => {
          return ( 
            <CertContainer key={index}>
                  <p> <b>{ cert.title }</b> <br/> { cert.tagline }</p> 
                  <p> <StyledCert src={ cert.photo }/></p> 
            </CertContainer>
          )
        })
      }
    </div>
  )
}

const Certificates: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace left-justified">
    <div className="centered">
      <Title className="header">Gift Certificates</Title>
      <p className="tagline" style={{textAlign:"left"}}> Give the gift that everybody loves. Holidays, birthdays, and 'just because' are great cause for celebration...
       Gift Certificates are available for purchase in any amount from $65 and up. Show them that you care, give the gift of massage.
        Choose your Gift Certificate below and send me an email with a personal note that you wish to include. 
        I'll customize your certificate with a handwritten calligraphy message. 
        The gift certificate can be mailed directly to you or the recipient.
      </p>
    </div>
    <Grid>
      <Col>
        <Certs>{ certificateMap() }</Certs>
      </Col>
    </Grid>
        <p>Read what some of our satisfied clients have said about us! Reviews on:
          <a href="https://www.yelp.com/biz/3-energies-massage-and-bodywork-san-francisco"> Yelp </a> &
          <a href="https://www.google.com/maps/place/3+Energies+Massage+and+Bodywork/@37.77686,-122.3982965,17z/data=!3m1!4b1!4m7!3m6!1s0x808f7fd42a204f2b:0x630fb461d6ea9e3e!8m2!3d37.77686!4d-122.3961078!9m1!1b1"> Google+</a>
        </p>
        <p className="centered tagline"><b>Thank you! </b><i>To all of our clients who have given us the opportunity to "Enhance each life with therapeutic 
          touch and awareness one massage at a time." We are grateful to each of you and appreciate your encouraging words!</i></p>
    </div>
  </InnerAppWrapper>
)

export default Certificates;