import styled from 'styled-components';

export const InnerAppWrapper = styled.div`
  font-family: "Oxygen", sans-serif;
  background-color: #e8e8e8;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.7;
  color: gray;
  align-items: center;

  a {
    color: rgb(29, 48, 48);
  }

  .whitespace {
    background-color: white;
    margin: 0 auto;
    display: block;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 1060px;
    padding: 2em;
    text-align: center;
  }

  .light-background {
    background-color: white;
  }

  .App-header {
    text-align: center;  
    padding: 20px 20px 0px 20px;
    color:  gray;
  }

  .App-title {
    font-size: 24px;
    font-weight: 320;
    font-style: italic;
    line-height: 1.7;
    color: gray;
    text-align: center;
  }

  .App-logo {
    height: 80px;
    margin-bottom: 10px;
    display: flex;
  }

  .tagline {
    font-family: "Oxygen",sans-serif;
    font-weight: 400;
    font-style: italic;
    color: #44502a;
    font-size: 14px;
  }

  .title {
    font-family: "Oxygen",sans-serif;
    font-weight: 600;
    color: #44502a;
    font-size: 16px;
    text-align: center;
  }

  .contact-info {
    text-align: center;
  }
`;

export const StyledGrid = styled.div`
  width: 100%;
  padding: 20px 0 15px 0 ;
  background-color: white;
  margin: 0 auto;
  padding: 2em;
  display: block;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 1060px;
  color: rgb(179, 179, 179);

  .header {
    font-family: Fjalla One;
    color: #44502a;
    font-weight: bold;
    font-style: italic;
    font-size: 30px;
  }

  .location ul {    
    list-style-type: none;
  }

  p {
    line-height: 25px;
  }

  hr {
    margin: 20px 0 20px 0;
  }
`;

export const StyledImg = styled.span`
  padding-bottom: 10px;
  background-color: white;

  img {
    max-height: 95px;
    max-width: 57px;
  }
`;