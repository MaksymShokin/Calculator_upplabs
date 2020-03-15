import {
  SAVE_USER_DATA,
  SAVE_USER_INPUT
} from '../actions/userActions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  company: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        country: action.country,
        company: action.company
      };
    case SAVE_USER_INPUT:
      switch (action.input) {
        case 'firstName':
          return {
            ...state,
            firstName: action.value
          };
        case 'lastName':
          return {
            ...state,
            lastName: action.value
          };
        case 'email':
          return {
            ...state,
            email: action.value
          };
        case 'country':
          return {
            ...state,
            country: action.value
          };
        case 'company':
          return {
            ...state,
            company: action.value
          }
      }
      break;
    default:
      return state;
  }
};
