export const SET_AUDIO = 'SET_AUDIO';
export const SET_SOUND = 'SET_SOUND';

export const setAudio = value => {
  return {
    type: SET_AUDIO,
    value: value
  }
};

export const setSound = value => {
  return {
    type: SET_SOUND,
    value: value
  }
};


