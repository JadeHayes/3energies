import * as React from 'react';
import styled from 'styled-components';
import { InnerAppWrapper } from './Common';

const StyledContact = styled.div`
  font-size: 14px;
  margin: 40px 0 25px 0;
`;

const ContactForm: React.SFC<{}> = () => (
  <InnerAppWrapper>
    <div className="whitespace">
      <StyledContact>
        Book your massage appointment today: Gina: 650-483-6169
        For an In-House Massage session: Beth: 408.728.0262<br/>
        <small>Send an email, call or text to the practitioner for questions or comments.</small>
      </StyledContact>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" aria-describedby="firstName" placeholder="First name"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" aria-describedby="lastName" placeholder="Last name"/>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <input type="phone" className="form-control" aria-describedby="phoneNumber" placeholder="Phone Number"/>
        </div>
        <div className="form-group">
          <textarea className="form-control" aria-describedby="comments" placeholder="Comments"/>
        </div>
        <div className="form-group">
          <input type="phone" className="form-control" aria-describedby="phoneNumber" placeholder="Company"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </InnerAppWrapper>
)

export default ContactForm;