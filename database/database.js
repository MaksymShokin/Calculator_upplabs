export const saveDataToDatabase = () => {
  return async (dispatch, getState) => {
    const formData = getState().form;
    const userData = getState().user;
    const time = getState().time;

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
          time: time
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
