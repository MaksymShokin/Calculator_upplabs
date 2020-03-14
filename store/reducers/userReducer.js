import {  } from '../actions/userActions';

import { SAVEUSERDATA } from '../actions/userActions';

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  country: null,
  company: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVEUSERDATA:
      return {
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        country: action.country,
        company: action.company
      };
    default:
      return state;
  }
};
