import React from 'react';
import styled from 'styled-components';
import Text from '../components/text';
import Timeline from './timeline';
import ScheduleCard from '../components/scheduleCard';
import { SelectSchedule, SelectOverrideTime } from '../state/selectors';

import { GetCurrentTimeHeightOffset, TimeInMinutes } from '../util/time';

const TimeSlot = styled.div`
  width: inherit;
  display: flex;
  position: relative;
`;

const Events = styled.div`
  position: absolute;
  left: 46px;
`;

// anchor events and timeline to the first timeslot
function FirstSlot({ time }) {
  const schedule = SelectSchedule();
  const overrideTime = SelectOverrideTime();
  const currentTimeInMinutes =
    overrideTime.hours() * 60 + overrideTime.minutes();

  return (
    <TimeSlot>
      <Events>
        {schedule.map(event => (
          <ScheduleCard
            key={event.id}
            schedule={event}
            disabled={currentTimeInMinutes >= TimeInMinutes(event.end)}
          />
        ))}
      </Events>
      <Text color='disabled' text={time} style={{ marginRight: '17px' }} />
      <Timeline heightOffset={GetCurrentTimeHeightOffset(overrideTime)} />
    </TimeSlot>
  );
}

export default FirstSlot;
