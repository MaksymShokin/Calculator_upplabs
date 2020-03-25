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
import * as errorActions from '../store/actions/errorActions';
import * as database from '../database/database';
import DefaultText from './DefaultText';

const UserForm = props => {
  const {title, navigate} = props;
  const [saving, setSaving] = useState(false);

  const {firstName, lastName, email, country, company} = useSelector(state => state.user);
  const {firstNameError, lastNameError, emailError, countryError} = useSelector(state => state.error);
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
      navigate && dispatch(database.saveDataToDatabase());
      setSaving(true);
      setTimeout(() => {
        setSaving(false)
      }, 2000);
      navigate && props.formSwitch('result')
    }
  };

  const onBlurHandler = (input, value) => {
    dispatch(errorActions.setError(input, value));
  };

  const onChangeHandler = (input, value) => {
    dispatch(userActions.saveUserInput(input, value))
  };

  return (
    <View style={styles.screen}>
      <DefaultTextBold style={styles.title}>
        {title}
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
        <View style={styles.saveContainer}>
          {saving && <DefaultText>Saved!</DefaultText>}
        </View>
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
  },
  saveContainer: {
    minHeight: 50,
    marginTop: 15,
    alignItems: 'center'
  }
});

export default UserForm


