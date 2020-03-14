import { AsyncStorage } from 'react-native';

export const SAVEUSERDATA = 'SAVEUSERDATA';

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
      let message = 'Something went wrong!';
  console.log(response)
      throw new Error(errorId);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: SAVEUSERDATA,
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      company: company
    });
    //
    // saveDataToStorage(
    //   firstName,
    //   lastName,
    //   email,
    //   country,
    //   company
    // )
  };
};

// const saveDataToStorage = (firstName, lastName, email, country, company) => {
//   AsyncStorage.setItem('userData', JSON.stringify({
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     country: country,
//     company: company
//   }))
// };
