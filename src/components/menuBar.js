import React, { useState } from 'react';
import styled from 'styled-components';
import BottomNavButtons from './bottomNavButtons';
import PlusIcon from 'mdi-material-ui/Plus';

const BackgroundMenu = styled.div`
  width: 375px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const AddButtonContainer = styled.div`
  width: 84px;
  height: 84px;
  background: linear-gradient(143deg, #fff 15%, #e2e8f5 82%);
  border-radius: 50%;
  position: absolute;
  top: -42px;
  left: 145px;
`;

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0 7px 6px -3px #abbbd7;
  background-color: #3e83ff;
  border-radius: 50%;
  position: absolute;
  top: 17px;
  left: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;

  &:hover {
    background-color: #66a3ff;
  }
`;

function MenuBar() {
  const [selected, setSelected] = useState(2);

  return (
    <BackgroundMenu>
      <AddButtonContainer>
        <AddButton type="button"><PlusIcon style={{ fontSize: '38px'}}/></AddButton>
      </AddButtonContainer>
      <BottomNavButtons selected={selected} onClick={setSelected} />
    </BackgroundMenu>
  );
}

export default MenuBar;
