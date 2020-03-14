import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import DefaultText from './DefaultText';
import DefaultTextBold from './DefaultTextBold';
import Colors from '../constants/Colors';

const CustomInput = props => {
  const {label, onChangeHandler, onBlurHandler, value, errorText, error} = props;

  let errorField;

  if (error) {
    errorField = (
      <View style={styles.errorContainer}>
        <DefaultText style={styles.errorText}>{error}</DefaultText>
      </View>
    )
  }

  return (
    <View style={styles.inputContainer}>
      <DefaultTextBold style={styles.label}>{label}</DefaultTextBold>
      <TextInput
        {...props}
        style={styles.input}
        value={value}
        onChangeText={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {errorField}

    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%'
  },
  label: {
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: Colors.darkGrey,
    borderBottomWidth: 2,
    backgroundColor: Colors.lightGrey,
    borderRadius: 10
  },
  errorContainer: {
    marginVertical: 5
  },
  errorText: {
    color: 'red',
    fontSize: 13
  }
});

export default CustomInput
