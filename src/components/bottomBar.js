import React from 'react';
import styled from 'styled-components';
import Schedule from '../components/schedule';

const BackgroundBottom = styled.div`
  width: 375px;
  height: 498px;
  background: linear-gradient(to bottom, #f8fbff, #e2e9f5);
  margin-top: -52px;
`;

function TopBar() {
  return (
      <BackgroundBottom>
        <Schedule/>
      </BackgroundBottom>
  );
}

export default TopBar;
