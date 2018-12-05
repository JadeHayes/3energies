import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { InnerAppWrapper, StyledGrid } from '../static/Common';
import { pricing } from '../static/Pricing'


const StyledPricing = styled.p`
  margin: 2em;
  text-align: left;
`;

const StyledInfo = styled.p`
  max-width: 100%;
  margin-top: -10px;
`;

const StyledRow = styled(Row)`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;

  @media only screen and (max-width: 596px) {
    padding-left: 0;
  }
`;

const StyledMenuItem = styled(Row)`
  width: 100%;
`;

const StyledTagline = styled.p`
  font-family: "Oxygen",sans-serif;
  font-weight: 400;
  font-style: italic;
  color: #44502a;
  margin-top: .5em;
  font-size: 14px;
`;

const menuItems = () => {
  return (
    <span>
      {
        pricing.map((item, index) => {
          return ( 
            <Grid key={index}>
              <StyledMenuItem className='testing'>
                <Col xs={10} md={8}>
                  <StyledTagline className='tagline'> { item.title } | { item.shortDesc } </StyledTagline> 
                  <StyledInfo> { item.info } </StyledInfo> 
                </Col>
                <Col xs={2} md={4}>
                  <StyledPricing> ${ item.price }  </StyledPricing>
                </Col>
              </StyledMenuItem>
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
      <h4 className='header'>Massage Rates Menu</h4>
    </div>
    <StyledGrid>
        <StyledRow>
          { menuItems() }
        </StyledRow>
    </StyledGrid>
  </InnerAppWrapper>
)

export default Menu;