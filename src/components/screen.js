import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 809px;
  min-width: 375px;
  border: 1px solid black;
  background: #fff;
  position: relative;
`;

function Screen({ children }) {
  return <Container>{children}</Container>;
}

export default Screen;
