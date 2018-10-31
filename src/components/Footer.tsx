import * as React from 'react';
import styled from 'styled-components';
import ELogo from '../static/logos/3ELogo_banner.jpg';
import AMTA from '../static/logos/AMTA.jpg';
import Esalen from '../static/logos/Esalen.jpg';
import NCBTMB from '../static/logos/NCBTMB.gif';
import { InnerAppWrapper } from './Common';

const StyledLogo = styled.img`
  max-width: 150px;
  padding: 0 15px 25px 15px;
`;

const members = [ ELogo, AMTA , Esalen , NCBTMB ];
const logos = () => {
  return (
    <span>
      {
        members.map((logo, index) => {
          // tslint:disable-next-line:jsx-key
          return <StyledLogo src={ logo }/>
        })
      }
    </span>
  )
}

const Footer: React.SFC = () => (
  <InnerAppWrapper>
    <div className='whitespace'>
      <div>{ logos() }</div>
      Member of AMTA, EMBA, NCBTMB. 3Energies Massage and Bodywork
      <p>Copyrightⓒ 2007, 2008, 2009, 2010, 2011, 2012, 2014. </p>
      <p><i>All rights reserved.</i></p>
      <hr/>
      <a href='https://goo.gl/maps/4tKpRv33Fpv'>
        330 Townsend Street, Suite 232
        San Francisco, CA 94107
      </a>
      <div>
        ph: <a href="tel:+16504836169"> 650-483-6169</a>
        &nbsp; fax: 415-484-7166
      </div>
      <a href='mailto:gina@3energiesmb.com?Subject=Massage%20inquiry'>gina@3energiesmb.com</a>
    </div>
  </InnerAppWrapper>
);

export default Footer;
