import {
  SET_ERROR
} from '../actions/errorActions';

const initialState = {
  firstNameError: '',
  lastNameError: '',
  emailError: '',
  countryError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      switch (action.errorField) {
        case 'firstNameError':
          return {
            ...state,
            firstNameError: action.value
          };
        case 'lastNameError':
          return {
            ...state,
            lastNameError: action.value
          };
        case 'emailError':
          return {
            ...state,
            emailError: action.value
          };
        case 'countryError':
          return {
            ...state,
            countryError: action.value
          };
      }
      break;
    default:
      return state;
  }
};
