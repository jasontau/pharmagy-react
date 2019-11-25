import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 809px;
  min-width: 375px;
  background: #fff;
  position: relative;
  clip-path: inset(0px 0px)
`;

function Screen({ children }) {
  return <Container>{children}</Container>;
}

export default Screen;
