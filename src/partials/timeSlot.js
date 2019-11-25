import React from 'react';
import styled from 'styled-components';
import Text from '../components/text';

const Container = styled.div`
  width: inherit;
  display: flex;
`;

function TimeSlot({ time }) {
  return (
    <Container>
      <Text color='disabled' text={time} style={{ marginRight: "17px"}} />
    </Container>
  );
}

export default TimeSlot;
