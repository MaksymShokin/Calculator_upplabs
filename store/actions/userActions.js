import { AsyncStorage } from 'react-native';

export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SAVE_USER_INPUT = 'SAVE_USER_INPUT';

export const saveUserInput = (input, value) => {
  return {
    type: SAVE_USER_INPUT,
    input: input,
    value: value
  };
};

export const saveUserData = (firstName, lastName, email, country, company) => {
  return async dispatch => {
    const response = await fetch(
      `https://calculator-upplabs.firebaseio.com/calculator/${firstName} ${lastName}.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          country: country,
          company: company
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;

      throw new Error(errorId);
    }

    const resData = await response.json();
    // console.log(resData);

    dispatch({
      type: SAVE_USER_DATA,
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      company: company
    });

    saveDataToStorage(
      firstName,
      lastName,
      email,
      country,
      company
    )
  };
};

const saveDataToStorage = (firstName, lastName, email, country, company) => {
  debugger
  AsyncStorage.setItem('userData', JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    email: email,
    country: country,
    company: company
  }))
};
