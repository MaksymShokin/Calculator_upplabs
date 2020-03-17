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
  saveDataToStorage(
    firstName,
    lastName,
    email,
    country,
    company
  );
  return {
    type: SAVE_USER_DATA,
    firstName: firstName,
    lastName: lastName,
    email: email,
    country: country,
    company: company
  };
};

const saveDataToStorage = async (firstName, lastName, email, country, company) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      company: company
    }));
  } catch (error) {
    throw new Error
  }
};
