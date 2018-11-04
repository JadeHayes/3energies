import * as React from 'react';
import  { reviews } from '../static/Reviews';
import { InnerAppWrapper } from './Common';


const review = () => {
  return (
    <span>
      {
        reviews.map((rev, index) => {
          return ( 
            <div key={index}>
                  <p> { rev.tagline } </p> 
                  <p> { rev.body } </p> 
                  <p> { rev.name } </p> 
            </div>
          )
        })
      }
    </span>
  )
}

const Testimonials: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace">
    
    <div>{ review() }</div>
    </div>
  </InnerAppWrapper>
)

export default Testimonials;