import {
  SET_AUDIO,
  SET_SOUND
} from '../actions/audioActions';

const initialState = {
  playingStatus: 'nosound',
  soundOptions: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO:
      return {
        ...state,
        playingStatus: action.value
      };
    case SET_SOUND:
      return {
        ...state,
        soundOptions: action.value
      };
    default:
      return state;
  }
};
