import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { GetHeightOffsetByTime, FormatTime } from '../util/time';
import ScheduleIcon from './scheduleIcon';
import Needle from 'mdi-material-ui/Needle';
import Text from '../components/text';
import theme from '../theme';

const Card = styled.div`
  width: 240px;
  min-height: 62px;
  height: ${props => props.duration || '62'}px;
  border-radius: 10px;
  box-shadow: 0 13px 10px -10px #d6e2f6;
  background-color: ${props => (props.disabled ? '#edf1f7' : '#fff')};
  margin-left: 18px;
  position: absolute;
  top: ${props => props.heightOffset}px;
`;

const Container = styled.div`
  height: 30px;
  width: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 17px;
  display: flex;
`;

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props =>
    props.disabled ? 'rgba(176, 190, 212, 0.1)' : '#d4e6ff'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const useStyles = makeStyles({
  icon: {
    fontSize: '18px',
    color: '#3c94ff'
  },
  disabledIcon: {
    fontSize: '18px',
    color: theme.disabled
  }
});

function ScheduleCard({ schedule: { start, end, patient }, ...rest }) {
  const classes = useStyles();
  const minutes = GetHeightOffsetByTime(start);
  const endMinutes = GetHeightOffsetByTime(end);
  const durationHeight = endMinutes - minutes;

  const timeDisplay = `${FormatTime(start)} - ${FormatTime(end)}`;

  const { disabled } = rest;
  const textColor = disabled ? 'disabled' : 'grey'
  
  return (
    <Card heightOffset={minutes} duration={durationHeight} {...rest}>
      <Container>
        <IconContainer {...rest}>
          <Needle className={disabled ? classes.disabledIcon : classes.icon} />
        </IconContainer>
        <div>
          <Text color={disabled ? 'disabled': 'black'} text={patient.name} weight='bold' />
          <TextContainer>
            <ScheduleIcon color={textColor} style={{ marginRight: '5px' }} />
            <Text color={textColor} text={timeDisplay} />
          </TextContainer>
        </div>
      </Container>
    </Card>
  );
}

export default ScheduleCard;
