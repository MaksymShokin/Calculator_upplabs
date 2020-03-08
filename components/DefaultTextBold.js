import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultTextBold = props => {
  return (
    <Text style={[{...styles.body, ...props.style}]}>
      {props.children}
    </Text>
  )
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'raleway-bold'
  }
});

export default DefaultTextBold;
