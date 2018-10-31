import styled from 'styled-components';

export const InnerAppWrapper = styled.div`
  font-family: "Oxygen", sans-serif;
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
    font-family: "Oxygen", sans-serif;
  }

  .App-logo {
    height: 80px;
    margin-bottom: 10px;
    display: flex;
  }
`;