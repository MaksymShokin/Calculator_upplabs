import React, {useState} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import DefaultText from '../components/DefaultText';
import DefaultTextBold from './DefaultTextBold';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [company, setCompany] = useState('');

  return (
    <View style={styles.screen}>
      <DefaultTextBold style={styles.title}>
        Please fill in quick form to get the result!
      </DefaultTextBold>
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
    fontSize: 20
  }
});

export default UserForm


