import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  bottom: 0px;
  right: 35px;
`;

const StyledButton = styled.button`
  width: 74px;
  height: 32px;
  border-radius: 5px;
  box-shadow: 0 20px 15px -12px rgba(21, 85, 194, 0.13);
  background-color: #3d8bff;
  padding: 0;
  border: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: 0.3px;
  color: #c2ddff;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #66a3ff;
  }
`;

const Arrow = styled.div`
  box-sizing: border-box;
  height: 5px;
  width: 5px;
  border-style: solid;
  border-color: #c2ddff;
  border-width: 0px 1px 1px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
  position: absolute;
  right: 8px;
  top: 13px;
`;

function DateButton({ text }) {
  return (
    <Container>
      <StyledButton>{text}</StyledButton>
      <Arrow />
    </Container>
  );
}

export default DateButton;
