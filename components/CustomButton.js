import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import DefaultTextBold from './DefaultTextBold';

const customButton = props => {
  return (
    <TouchableOpacity
      style={props.color === 'orange' ? styles.buttonStyleOrange : styles.buttonStyleBlack}
      onPress={() => props.onPress()}
    >
      <DefaultTextBold style={props.color === 'orange' ? styles.textStyleBlack : styles.textStyleOrange}>{props.text}</DefaultTextBold>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  buttonStyleOrange: {
    padding: 12,
    backgroundColor: Colors.primaryColor,
    borderRadius: 5
  },
  buttonStyleBlack: {
    padding: 12,
    backgroundColor: 'black',
    borderRadius: 5
  },
  textStyleOrange: {
    fontSize: 20,
    color: Colors.primaryColor,
    textAlign: 'center'
  },
  textStyleBlack: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  }
});

export default customButton;
