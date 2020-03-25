export const SET_ERROR = 'SET_ERROR';

export const setError = (field, value) => {
  switch (field) {
    case 'firstName':
      return {
        type: SET_ERROR,
        value: value.length < 2 ? 'First Name should have at least 2 letters' : '',
        errorField: 'firstNameError'
      };
    case 'lastName':
      return {
        type: SET_ERROR,
        value: value.length < 2 ? 'Last Name should have at least 2 letters' : '',
        errorField: 'lastNameError'
      };
    case 'email':
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return {
        type: SET_ERROR,
        value: emailRegex.test(value.toLowerCase()) ? '' : 'Please enter a valid email',
        errorField: 'emailError'
      };
    case 'country':
      return {
        type: SET_ERROR,
        value: value.length < 3 ? 'Country name should have at least 3 letters' : '',
        errorField: 'countryError'
      };
    default:
      break;
  }
};
