import React from 'react';
import styled from 'styled-components';

const BackgroundTop = styled.div`
  width: 375px;
  height: 246px;
  background-image: linear-gradient(131deg, #2d79e6 -18%, #053476 113%);
`;

function TopBar() {
  return <BackgroundTop />;
}

export default TopBar;
