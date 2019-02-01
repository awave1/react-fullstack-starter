import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 25px;
  color: pink;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>hello</Header>
      </div>
    );
  }
}

export default App;
