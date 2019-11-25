import React from 'react';
import SearchBar from './searchBar';
import Profile from './profile';
import DateButton from './dateButton';
import PatientCard from './patientCard';
import Carousel from './carousel';
import styled from 'styled-components';

const BackgroundTop = styled.div`
  width: 375px;
  height: 246px;
  background-image: linear-gradient(131deg, #2d79e6 -18%, #053476 113%);
`;

const Container = styled.div`
  width: inherit;
  position: relative;
  height: 169px;
`;

const SearchContainer = styled.div`
  margin-top: 47px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  display: flex;
  width: inherit;
`;

const PatientsSummary = styled.div`
  position: absolute;
  bottom: 0;
  left: 35px;
`;

const MyPatients = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const TotalPatients = styled.div`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: 0.3px;
  color: #c2ddff;
  text-align: left;
`;

const PatientCards = styled.div`
  margin-top: -52px;
  cursor: ew-resize;
`;

function TopBar() {
  return (
    <>
      <BackgroundTop>
        <Container>
          <SearchContainer>
            <SearchBar />
            <Profile />
          </SearchContainer>
          <DateButton text='Today' />
          <PatientsSummary>
            <MyPatients>My Patients</MyPatients>
            <TotalPatients>12 total</TotalPatients>
          </PatientsSummary>
        </Container>
      </BackgroundTop>
      <PatientCards>
        <Carousel>
          <PatientCard />
          <PatientCard />
          <PatientCard />
        </Carousel>
      </PatientCards>
    </>
  );
}

export default TopBar;
