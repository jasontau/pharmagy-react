import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  box-shadow: 0 15px 10px -2px #0f4592;
  background-color: #ffffff;
  position: relative;
  margin-right: 35px;
`;

const ProfilePic = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #d5d8f6;
  position: absolute;
  top: 2.5px;
  left: 2.5px;
`;

const Notifications = styled.div`
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: #fa3d3d;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 9px;
`;

function Profile() {
  return (
    <Circle>
      <ProfilePic />
      <Notifications>4</Notifications>
    </Circle>
  );
}

export default Profile;
