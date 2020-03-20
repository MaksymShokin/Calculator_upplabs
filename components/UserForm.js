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
import * as database from '../database/database';

const UserForm = props => {
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [countryError, setCountryError] = useState('');

  const {firstName, lastName, email, country, company} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const checkValidation = () => {
    if (!firstName) {
      onBlurHandler('firstName', firstName)
    }

    if (!lastName) {
      onBlurHandler('lastName', lastName)
    }

    if (!email) {
      onBlurHandler('email', email)
    }

    if (!country) {
      onBlurHandler('country', country)
    }

    if (!firstName || !lastName || !email || !country || firstNameError || lastNameError || emailError || countryError) {
      Alert.alert(
        'Please fill in form',
        'Check for error and empty fields',
        [
          {text: 'OK'},
        ],
        {cancelable: false},
      );
    } else {
      dispatch(userActions.saveUserData(firstName, lastName, email, country, company));
      dispatch(database.saveDataToDatabase());
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
        value={firstName}
        onChangeHandler={onChangeHandler}
        error={firstNameError}
        onBlurHandler={() => onBlurHandler('firstName', firstName)}
      />
      <CustomInput
        label='Last name'
        inputName='lastName'
        value={lastName}
        onChangeHandler={onChangeHandler}
        error={lastNameError}
        onBlurHandler={() => onBlurHandler('lastName', lastName)}
      />
      <CustomInput
        label='Email address'
        inputName='email'
        value={email}
        onChangeHandler={onChangeHandler}
        error={emailError}
        onBlurHandler={() => onBlurHandler('email', email)}
      />
      <CustomInput
        label='Country'
        inputName='country'
        value={country}
        onChangeHandler={onChangeHandler}
        error={countryError}
        onBlurHandler={() => onBlurHandler('country', country)}
      />
      <CustomInput
        label='Company'
        inputName='company'
        value={company}
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


