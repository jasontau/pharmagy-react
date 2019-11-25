import { useStateValue } from './index';
import moment from 'moment'

export function SelectCurrentState() {
  const [state] = useStateValue();
  return state;
}

export function SelectSchedule() {
  const state = SelectCurrentState();

  // TODO: implement denormalizr or some sort of memoization, or move to BE
  const newSchedule = state.schedule.map(item => ({
      ...item,
      patient: state.patients.find(patient => patient.id === item.patient_id)
    }));

  return newSchedule;
}

export function SelectOverrideTime() {
  const state = SelectCurrentState();

  return state.overrideTime || moment()
}
