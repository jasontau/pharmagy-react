import React from 'react';
import Swiper from 'react-id-swiper';
import TimeSlot from '../partials/timeSlot';
import FirstSlot from '../partials/firstSlot';
import Text from '../components/text';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 82px;
  margin-left: 35px;
  height: 342px;
`;

const SwiperContainer = styled.div`
  clip-path: inset(0px 0px);
  height: inherit;
`;

const Headings = styled.div`
  display: flex;
`;

function Schedule() {
  const params = {
    direction: 'vertical',
    autoHeight: true,
    height: '42',
    freeMode: true,
    freeModeSticky: false,
    initialSlide: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  return (
    <Container>
      <Headings>
        <Text color='black' text='Time' />
        <Text style={{ marginLeft: '39px' }} color='black' text='Events' />
      </Headings>
      <SwiperContainer>
        <Swiper {...params}>
          <div key='0:00'>
            <FirstSlot first time='0:00' />
          </div>
          {new Array(47).fill('').map((_, index) => {
            const slot = index + 1;
            const minute = slot % 2 ? '30' : '00';
            const hour = Math.floor(slot / 2);
            const time = `${hour}:${minute}`;

            return (
              <div key={time}>
                <TimeSlot time={time} />
              </div>
            );
          })}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
}

export default Schedule;
