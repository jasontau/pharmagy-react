import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../theme';
import Schedule from '@material-ui/icons/Schedule';

const useStyles = color => {
  return makeStyles({
    icon: {
      fontSize: '14px',
      color: theme[color] || theme.secondary
    }
  })();
};

function ScheduleIcon({ color }) {
  const classes = useStyles(color);
  return <Schedule className={classes.icon}></Schedule>;
}

export default ScheduleIcon;
