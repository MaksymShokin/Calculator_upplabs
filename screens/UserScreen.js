import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import DefaultText from '../components/DefaultText';

const UserScreen = () => {
  return (
    <View style={styles.screen}>
      <DefaultText>
        UserScreen
      </DefaultText>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default UserScreen


