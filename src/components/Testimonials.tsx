import * as React from 'react';
import styled from 'styled-components';
import { InnerAppWrapper } from '../static/Common';
import  { reviews } from '../static/Reviews';
import stars from '../static/stars.png'

const StyledHeader = styled.div`
  margin-bottom: 0;
  padding-bottom: -20px;
  font-weight: 400;
  font-family: Fjalla One;
  font-weight: bold;
  font-style: italic;
  font-size: 30px;
  text-align: center;
`;

const review = () => {
  return (
    <span>
      {
        reviews.map((rev, index) => {
          return ( 
            <div key={index}>
                  <img src={ stars }/> <br/>
                  <p className='tagline'> { rev.tagline } </p> 
                  <p> { rev.body } </p> 
                  <p> - { rev.name } </p> 
            </div>
          )
        })
      }
    </span>
  )
}

const Testimonials: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace left-justified">
    <div className="centered">
      <StyledHeader>Testimonials</StyledHeader>
      <p className="tagline">Wow! 3Energies Massage and Bodywork gets a 'five-star' rating from 
          <a href="https://www.google.com/maps/place/3+Energies+Massage+and+Bodywork/@37.77686,-122.3982965,17z/data=!3m1!4b1!4m7!3m6!1s0x808f7fd42a204f2b:0x630fb461d6ea9e3e!8m2!3d37.77686!4d-122.3961078!9m1!1b1"> Google+</a>,
          and <a href="https://www.yelp.com/biz/3-energies-massage-and-bodywork-san-francisco"> Yelp </a>!
      </p>
    </div>
    <div>{ review() }</div>
      <p>Read what some of our satisfied clients have said about us! Reviews on:
        <a href="https://www.yelp.com/biz/3-energies-massage-and-bodywork-san-francisco"> Yelp </a> &
        <a href="https://www.google.com/maps/place/3+Energies+Massage+and+Bodywork/@37.77686,-122.3982965,17z/data=!3m1!4b1!4m7!3m6!1s0x808f7fd42a204f2b:0x630fb461d6ea9e3e!8m2!3d37.77686!4d-122.3961078!9m1!1b1"> Google+</a>
      </p>
      <p className="centered tagline"><b>Thank you! </b><i>To all of our clients who have given us the opportunity to "Enhance each life with therapeutic 
        touch and awareness one massage at a time." We are grateful to each of you and appreciate your encouraging words!</i></p>
    </div>
  </InnerAppWrapper>
)

export default Testimonials;