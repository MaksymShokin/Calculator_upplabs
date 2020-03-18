import React from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { Audio } from 'expo-av';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import * as audioActions from '../store/actions/audioActions';

const CustomIcon = () => {
  const dispatch = useDispatch();
  const {playingStatus, soundOptions} = useSelector(state => state.audio);

  const source = require('../assets/music/the-animals-the-house-of-the-rising-sun.mp3');

  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      source,
      {
        shouldPlay: true,
        isLooping: true
      },
      updateScreenForSoundStatus
    );
    dispatch(audioActions.setSound(sound));
    dispatch(audioActions.setAudio('playing'))
  };

  const updateScreenForSoundStatus = (status) => {
    if (status.isPlaying && playingStatus !== 'playing') {
      dispatch(audioActions.setAudio('playing'))
    } else if (!status.isPlaying && playingStatus === 'playing') {
      dispatch(audioActions.setAudio('paused'))
    }
  };

  const pauseAndPlayRecording = async () => {
    if (soundOptions != null) {
      if (playingStatus === 'playing') {
        await soundOptions.pauseAsync();
        dispatch(audioActions.setAudio('paused'))
      } else {
        await soundOptions.playAsync();
        dispatch(audioActions.setAudio('playing'))
      }
    }
  };

  const audioHandler = () => {
    switch (playingStatus) {
      case 'nosound':
        playAudio();
        break;
      case 'paused':
      case 'playing':
        pauseAndPlayRecording();
        break;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={audioHandler}>
      <Image
        source={require('../assets/images/logos/icon-black.jpg')}
        resizeMode='cover'
        style={styles.image}
      />
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 45,
    height: 45,
    borderRadius: 30
  }
});

export default CustomIcon
