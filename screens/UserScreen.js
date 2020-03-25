import React, { useEffect } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';
import UserForm from '../components/UserForm';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import * as userActions from '../store/actions/userActions';
import * as errorActions from '../store/actions/errorActions';

const UserScreen = props => {
  const {firstName, lastName, email, country, company} = useSelector(state => state.user);
  // const {firstNameError, lastNameError, emailError, countryError} = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              if (!firstName && !lastName && !email && !country) {
                props.navigation.toggleDrawer();
              } else if (!firstName || !lastName || !email || !country) {
                Alert.alert(
                  'Please fill in form',
                  'Check for error and empty fields',
                  [
                    {text: 'OK'},
                  ],
                  {cancelable: false},
                );

                if (!firstName) {
                  dispatch(errorActions.setError('firstName', firstName));
                }

                if (!lastName) {
                  dispatch(errorActions.setError('lastName', lastName));
                }

                if (!email) {
                  dispatch(errorActions.setError('email', email));
                }

                if (!country) {
                  dispatch(errorActions.setError('country', country));
                }
              } else {
                dispatch(userActions.saveUserData(firstName, lastName, email, country, company));
                props.navigation.toggleDrawer();
              }
            }}
          />
        </HeaderButtons>
      )
    })
  });

  return (
    <KeyboardAvoidingView
      style={{flex: 1, justifyContent: 'center'}}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <UserForm title='Please enter your details' navigate={false}/>
      </ScrollView>
    </KeyboardAvoidingView>

  )
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Your details'
  }
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default UserScreen
