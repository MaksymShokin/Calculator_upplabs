import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DefaultText = props => {
  return (
    <Text style={{...styles.body, ...props.style}}>
      {props.children}
    </Text>
  )
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'raleway'
  }
});

export default DefaultText;
