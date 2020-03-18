import React, { useState } from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { Audio } from 'expo-av';

const CustomIcon = () => {
  const [playingStatus, setPlayingStatus] = useState('notstarted');
  const [soundOptions, setSoundOptions] = useState();

  const source = require('../assets/music/the-animals-the-house-of-the-rising-sun.mp3');

  const playAudio = async () => {
    const {sound} = await Audio.Sound.createAsync(
      source,
      {
        shouldPlay: true,
        isLooping: true
      },
      updateScreenForSoundStatus
    );
    setSoundOptions(sound);
    setPlayingStatus('playing')
  };

  const updateScreenForSoundStatus = (status) => {
    if (status.isPlaying && playingStatus !== 'playing') {
      setPlayingStatus('playing');
    } else if (!status.isPlaying && playingStatus === 'playing') {
      setPlayingStatus('paused');
    }
  };

  const pauseAndPlayRecording = async () => {
    if (soundOptions != null) {
      if (playingStatus === 'playing') {
        await soundOptions.pauseAsync();
        setPlayingStatus('paused')
      } else {
        await soundOptions.playAsync();
        setPlayingStatus('playing')
      }
    }
  };

  const audioHandler = () => {
    switch (playingStatus) {
      case 'notstarted':
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
