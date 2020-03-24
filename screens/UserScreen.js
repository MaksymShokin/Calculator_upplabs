import React, { useEffect } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
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

const UserScreen = props => {
  const {firstName, lastName, email, country, company} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              dispatch(userActions.saveUserData(firstName, lastName, email, country, company));
              props.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    })
  });

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        keyboardVerticalOffset={100}
      >
        <UserForm title='Please enter your details' navigate={false}/>
      </KeyboardAvoidingView>
    </ScrollView>
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
