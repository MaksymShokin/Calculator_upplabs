export const ADD_TIME = 'ADD_TIME';
export const RESET_TIME = 'RESET_TIME';

export const addTime = value => {
  return {
    type: ADD_TIME,
    value: value
  }
};

export const resetTime = () => {
  return {
    type: RESET_TIME
  }
};


