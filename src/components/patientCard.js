import React from 'react';
import styled from 'styled-components';
import ScheduleIcon from './scheduleIcon';
import CheckWidget from './checkWidget';
import Text from './text';

const Card = styled.div`
  width: 240px;
  height: 104px;
  border-radius: 6px;
  box-shadow: 0 15px 9px -7px #e5eaf5;
  background-color: #1b69c7;
  display: flex;
  margin-right: 15px;
`;

const Strip = styled.div`
  width: 7px;
  height: 104px;
  background-color: #66aaff;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 17px 15px 21px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function PatientCard() {
  return (
    <Card>
      <Strip />
      <InfoContainer>
        <Container>
          <Text
            text='Office No. 248'
            size='14'
            color='primary'
            weight='bold'
            style={{ paddingRight: '4px' }}
          />
          <Text size='14' text='/ 3 patients' />
        </Container>
        <Container style={{ paddingTop: '7px' }}>
          <ScheduleIcon />
          <Text
            text='08:30 - 02:00 PM'
            size='12'
            color='secondary'
            style={{ paddingLeft: '6px' }}
          />
        </Container>
        <Container
          style={{ paddingTop: '11px', justifyContent: 'space-between' }}
        >
          <Container>
            <CheckWidget padRight/>
            <CheckWidget padRight/>
            <CheckWidget padRight/>
          </Container>
          <Container>
            <CheckWidget padLeft complete />
          </Container>
        </Container>
      </InfoContainer>
    </Card>
  );
}

export default PatientCard;
