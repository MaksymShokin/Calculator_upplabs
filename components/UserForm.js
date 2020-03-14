import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Alert
} from 'react-native';
import DefaultText from '../components/DefaultText';
import DefaultTextBold from './DefaultTextBold';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import {useDispatch} from 'react-redux';

import * as userActions from '../store/actions/userActions';

const UserForm = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [company, setCompany] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [countryError, setCountryError] = useState('');

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
      debugger
      dispatch(userActions.saveUserData(firstName, lastName, email, country, company));
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
    }
  };

  return (
    <View style={styles.screen}>
      <DefaultTextBold style={styles.title}>
        Please fill in quick form!
      </DefaultTextBold>
      <CustomInput
        label='First name'
        value={firstName}
        onChangeHandler={setFirstName}
        error={firstNameError}
        onBlurHandler={() => onBlurHandler('firstName', firstName)}
      />
      <CustomInput
        label='Last name'
        value={lastName}
        onChangeHandler={setLastName}
        error={lastNameError}
        onBlurHandler={() => onBlurHandler('lastName', lastName)}
      />
      <CustomInput
        label='Email address'
        value={email}
        onChangeHandler={setEmail}
        error={emailError}
        onBlurHandler={() => onBlurHandler('email', email)}
      />
      <CustomInput
        label='Country'
        value={country}
        onChangeHandler={setCountry}
        error={countryError}
        onBlurHandler={() => onBlurHandler('country', country)}
      />
      <CustomInput
        label='Company'
        value={company}
        onChangeHandler={setCompany}
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


