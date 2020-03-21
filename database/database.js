export const saveDataToDatabase = () => {
  return async (dispatch, getState) => {
    const formData = getState().form;
    const userData = getState().user;
    const time = getState().time.time;
    const date = new Date();

    let formDataPlatformSlice;

    if (formData.platform === 'web') {
      formDataPlatformSlice = formData.web;
    } else if (formData.platform === 'mobile') {
      formDataPlatformSlice = formData.mobile;
    }

    const response = await fetch(
      `https://calculator-upplabs.firebaseio.com/calculator/${userData.firstName} ${userData.lastName}.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          platform: formData.platform,
          form: formDataPlatformSlice,
          user: userData,
          time: time,
          date: date.toISOString()
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;

      throw new Error(errorId);
    }

    // const resData = await response.json();
    // console.log(resData);
  };
};

export const fetchFromDatabase = () => {
  return async (dispatch, getState) => {
    try {
      const {firstName, lastName} = getState().user;

      if (!firstName && !lastName) {
        return;
      }

      const response = await fetch(`https://calculator-upplabs.firebaseio.com/calculator/${firstName} ${lastName}.json`);
      const resData = await response.json();

      if (!response.ok) {
        throw new Error('something wrong')
      }

      return resData
    } catch (error) {
      throw error
    }
  }

};
