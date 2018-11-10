import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { InnerAppWrapper, StyledGrid } from '../static/Common';
import { pricing } from '../static/Pricing'


const menuItems = () => {
  return (
    <span>
      {
        pricing.map((item, index) => {
          return ( 
            <Grid key={index}>
              <Row>
                <Col>
                  <div>
                        <p className='tagline'> { item.title } | { item.shortDesc } </p> 
                        <p> { item.info } </p> 
                  </div>
                </Col>
                <Col>
                  <p className='right'> ${ item.price }  </p>
                </Col>
              </Row>
            </Grid>
          )
        })
      }
    </span>
  )
}

const Menu: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace">
      <h4>Massage Rates Menu</h4>
    </div>
    <StyledGrid>
      <Grid>
        <Row>
          { menuItems() }
        </Row>
      </Grid>
    </StyledGrid>
  </InnerAppWrapper>
)

export default Menu;