import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './Header.jsx';

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
    padding: 0;
    margin: 0;
  }
`;

class HeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<HeaderContainer />, document.getElementById('Header'));
