import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  width: 23px;
  height: 23px;
  box-shadow: 0 5px 7px 0 #1662bd;
  background-color: ${props => props.complete ? "#5298ff" : "rgba(255, 255, 255, 0.44)"};
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: ${props => props.padLeft ? "6px" : "0"}
  margin-right: ${props => props.padRight ? "6px" : "0"}
`;

const useStyles = makeStyles({
  icon: {
    fontSize: '18px',
    color: theme.secondary
  }
});

function CheckWidget(props) {
  const classes = useStyles();
  return (
    <Container {...props}>
      {props.complete && <DoneIcon className={classes.icon}></DoneIcon>}
    </Container>
  );
}

export default CheckWidget;
