import {
  ADD_TIME,
  RESET_TIME
} from '../actions/timeActions';

const initialState = {
  time: 50
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIME:
      return {
        time: state.time + action.value
      };
    case RESET_TIME:
      return initialState;
    default:
      return state;
  }
};
