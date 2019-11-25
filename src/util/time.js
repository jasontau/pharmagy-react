const NUM_TIME_SLOTS = 48;
const SLOT_HEIGHT = 42; // in px
const MINUTES_IN_DAY = 60 * 24;

export function TimeInMinutes(time) {
  return [time.slice(0, 2) * 60, time.slice(2, 4) * 1].reduce(
    (total, value) => total + value
  );
}

// TODO: move pixel ratios to CONSTs
export function GetCurrentTimeHeightOffset(time) {
  const totalMinutes = TimeInMinutes(time)
  const dayCompletePercent = totalMinutes / MINUTES_IN_DAY;

  const heightOffset = Math.floor(
    NUM_TIME_SLOTS * SLOT_HEIGHT * dayCompletePercent
  );
  return heightOffset;
}

// eg. 0800 or 1788
export function GetHeightOffsetByTime(time) {
  const dayCompletePercent = TimeInMinutes(time) / MINUTES_IN_DAY;
  const heightOffset = Math.floor(
    NUM_TIME_SLOTS * SLOT_HEIGHT * dayCompletePercent
  );
  return heightOffset;
}

export function PrependZero(n){
  return n > 9 ? "" + n: "0" + n;
}

export function FormatTime(time) {
  let meridiem = 'AM'
  let timeArray = [time.slice(0, 2) * 1, time.slice(2, 4) * 1]
  if (timeArray[0] >= 13) {
    timeArray[0] = timeArray[0] - 12;
    meridiem = "PM"
  }
  return `${timeArray.map(PrependZero).join(':')} ${meridiem}`
}