export default function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return {
        ...state,
        overrideTime: action.time
      };
    default:
      return { ...state };
  }
}
