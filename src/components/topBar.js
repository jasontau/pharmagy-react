import React from 'react';
import SearchBar from './searchBar';
import styled from 'styled-components';

const BackgroundTop = styled.div`
  width: 375px;
  height: 246px;
  background-image: linear-gradient(131deg, #2d79e6 -18%, #053476 113%);
  position: relative;
`;

function TopBar() {
  return (
    <BackgroundTop>
      <SearchBar />
    </BackgroundTop>
  );
}

export default TopBar;
