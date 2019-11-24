import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const Input = styled.input`
  flex-grow: 1;
  margin-left: 23px;
  border: none;
  background: transparent;
  outline: none;
  caret-color: #c2ddff;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: 0.3px;
  color: #c2ddff;
  &::-webkit-input-placeholder {
    color: #c2ddff;
  }

`;

const Container = styled.div`
  width: 240px;
  height: 45px;
  border-radius: 31px;
  background-color: rgb(61, 139, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  transition: background-color 0.5s ease;

  &:hover, &:focus-within {
    background-color: rgb(61, 139, 255, 0.5);
  }
`;

const useStyles = makeStyles({
  icon: {
    fontSize: '15px',
    marginRight: '20px'
  }
});

function SearchBar() {
  const classes = useStyles();
  return (
    <Container>
      <Input placeholder='Search' />
      <SearchIcon className={classes.icon}></SearchIcon>
    </Container>
  );
}

export default SearchBar;
