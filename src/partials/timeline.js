import React from 'react';
import styled from 'styled-components';

const ElapsedTimeBorder = styled.div`
  border-left: 2px dashed #4076d5;
  height: calc(${props => props.heightOffset}px);
`;

const RemainingTimeBorder = styled.div`
  height: calc(48 * 42px - ${props => props.heightOffset}px);
  border-left: solid 1px rgba(176, 190, 212, 0.3);
  border-top: solid 1px rgba(176, 190, 212, 0.3);
  background: linear-gradient(
    to bottom,
    rgba(193, 216, 244, 0.41),
    rgba(193, 216, 244, 0)
  );
`;

const TimeMarker = styled.div`
  width: 14px;
  height: 14px;
  box-shadow: 0 3px 5px -1px #bac2d2;
  background-color: #fff;
  position: absolute;
  left: -6px;
  border-radius: 50%;
  top: calc(${props => props.heightOffset}px - 7px);
`;

const TimeMarkerDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #4076d5;
  border-radius: 50%;
  position: absolute;
  top: calc(${props => props.heightOffset}px - 4px);
  left: -3px;
`;

function Timeline({ heightOffset }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 46,
        width: '293px'
      }}
    >
      <ElapsedTimeBorder heightOffset={heightOffset} />
      <RemainingTimeBorder heightOffset={heightOffset} />
      <TimeMarker heightOffset={heightOffset} />
      <TimeMarkerDot heightOffset={heightOffset} />
    </div>
  );
}

export default Timeline;
