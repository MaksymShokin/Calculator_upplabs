import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Alert
} from 'react-native';
import DefaultTextBold from './DefaultTextBold';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import * as userActions from '../store/actions/userActions';

const UserForm = props => {
  const userData = useSelector(state => state.user);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [countryError, setCountryError] = useState('');

  const dispatch = useDispatch();

  const checkValidation = () => {
    debugger
    if (!userData.firstName) {
      onBlurHandler('firstName', userData.firstName)
    }

    if (!userData.lastName) {
      onBlurHandler('lastName', userData.lastName)
    }

    if (!userData.email) {
      onBlurHandler('email', userData.email)
    }

    if (!userData.country) {
      onBlurHandler('country', userData.country)
    }

    if (!userData.firstName || !userData.lastName || !userData.email || !userData.country || firstNameError || lastNameError || emailError || countryError) {
      Alert.alert(
        'Please fill in form',
        'Check for error and empty fields',
        [
          {text: 'OK'},
        ],
        {cancelable: false},
      );
    } else {
      console.log('gotoresult')
      dispatch(userActions.saveUserData(userData.firstName, userData.lastName, userData.email, userData.country, userData.company));
      props.formSwitch('result')
    }
  };

  const onBlurHandler = (input, value) => {
    switch (input) {
      case 'firstName':
        setFirstNameError(value.length < 2 ? 'First Name should have at least 2 letters' : '');
        break;
      case 'lastName':
        setLastNameError(value.length < 2 ? 'Last Name should have at least 2 letters' : '');
        break;
      case 'email':
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmailError(emailRegex.test(value.toLowerCase()) ? '' : 'Please enter a valid email');
        break;
      case 'country':
        setCountryError(value.length < 3 ? 'Country name should have at least 3 letters' : '');
        break;
      default:
        break;
    }
  };

  const onChangeHandler = (input, value) => {
    dispatch(userActions.saveUserInput(input, value))
  };

  return (
    <View style={styles.screen}>
      <DefaultTextBold style={styles.title}>
        Please fill in quick form!
      </DefaultTextBold>
      <CustomInput
        label='First name'
        inputName='firstName'
        value={userData.firstName}
        onChangeHandler={onChangeHandler}
        error={firstNameError}
        onBlurHandler={() => onBlurHandler('firstName', userData.firstName)}
      />
      <CustomInput
        label='Last name'
        inputName='lastName'
        value={userData.lastName}
        onChangeHandler={onChangeHandler}
        error={lastNameError}
        onBlurHandler={() => onBlurHandler('lastName', userData.lastName)}
      />
      <CustomInput
        label='Email address'
        inputName='email'
        value={userData.email}
        onChangeHandler={onChangeHandler}
        error={emailError}
        onBlurHandler={() => onBlurHandler('email', userData.email)}
      />
      <CustomInput
        label='Country'
        inputName='country'
        value={userData.country}
        onChangeHandler={onChangeHandler}
        error={countryError}
        onBlurHandler={() => onBlurHandler('country', userData.country)}
      />
      <CustomInput
        label='Company'
        inputName='company'
        value={userData.company}
        onChangeHandler={onChangeHandler}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          text='Save'
          style={styles.button}
          onPress={checkValidation}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  buttonContainer: {
    marginVertical: 15
  }
});

export default UserForm


