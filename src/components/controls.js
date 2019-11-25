// controls to debug the app
import React from 'react';
import { useStateValue } from '../state';
import { UpdateTime } from '../state/actions';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { PrependZero } from '../util/time';
import { debounce } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const Container = styled.div`
  margin-left: 2em;
  width: 360px;
`;

const marks = [
  {
    value: 0,
    label: '12:00 AM'
  },
  {
    value: 96,
    label: '11:59 PM'
  }
];

function valuetext(value) {
  const hour = Math.floor(value / 4);
  const minutes = (value % 4) * 15;
  return `${hour}:${PrependZero(minutes)}`;
}

const useStyles = makeStyles({
  sliderLabel: {
    color: 'white'
  }
});

const time = moment();

function Controls() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();

  const DispatchUpdateTime = value => {
    const hour = Math.floor(value / 4);
    const minutes = (value % 4) * 15;
    const result = time
      .hours(hour)
      .minutes(minutes)
      .format('HHmm');

    dispatch(UpdateTime(result));
  };

  const ResetTime = () => dispatch(UpdateTime(moment().format('HHmm')))

  const DebouncedUpdateTime = debounce(DispatchUpdateTime, 250);

  return (
    <Container>
      <Typography id='discrete-slider-always' gutterBottom>
        Override Time
      </Typography>
      <div style={{ marginTop: '2em' }}>
        <Slider
          defaultValue={14}
          getAriaValueText={valuetext}
          aria-labelledby='discrete-slider-always'
          step={1}
          marks={marks}
          valueLabelDisplay='on'
          valueLabelFormat={valuetext}
          max={95}
          onChange={(e, v) => DebouncedUpdateTime(v)}
          classes={{
            markLabel: classes.sliderLabel
          }}
        />
      </div>
      <div>
        <Button
          disabled={!state.overrideTime}
          variant='contained'
          color='primary'
          onClick={ResetTime}
        >
          Reset Time
        </Button>
      </div>
    </Container>
  );
}

export default Controls;
