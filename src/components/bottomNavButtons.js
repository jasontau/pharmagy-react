import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from 'mdi-material-ui/HomeVariantOutline';
import CalendarIcon from 'mdi-material-ui/CalendarBlankOutline';
import AccountIcon from 'mdi-material-ui/AccountOutline';
import ClockIcon from 'mdi-material-ui/ClockOutline';
import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  border: none;
  outline: none;
`;

const useStyles = makeStyles({
  icon: {
    fontSize: '32px',
    color: theme.disabled,
    transition: "color 0.5s ease",
    cursor: 'pointer'
  }
});

const isSelected = (index, selected) =>
  index === selected ? '#3d8aff' : theme.disabled;

function BottomNavButtons({ selected, onClick }) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Button type='button'>
          <HomeIcon
            className={classes.icon}
            style={{ marginLeft: 21, color: isSelected(1, selected) }}
            onClick={() => onClick(1)}
          />
        </Button>
        <Button type='button'>
          <CalendarIcon
            className={classes.icon}
            style={{ marginLeft: 21, color: isSelected(2, selected) }}
            onClick={() => onClick(2)}
          />
        </Button>
      </div>
      <div>
        <Button type='button'>
          <ClockIcon
            className={classes.icon}
            style={{ marginRight: 21, color: isSelected(3, selected) }}
            onClick={() => onClick(3)}
          />
        </Button>
        <Button type='button'>
          <AccountIcon
            className={classes.icon}
            style={{ marginRight: 21, color: isSelected(4, selected) }}
            onClick={() => onClick(4)}
          />
        </Button>
      </div>
    </>
  );
}

export default BottomNavButtons;
