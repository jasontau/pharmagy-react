import React from 'react';
import styled from 'styled-components';

const BackgroundBottom = styled.div`
  width: 375px;
  height: 498px;
  background-image: linear-gradient(to bottom, #f8fbff, #e2e9f5);
`;

function TopBar() {
  return <BackgroundBottom />;
}

export default TopBar;
