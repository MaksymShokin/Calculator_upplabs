import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import UserForm from '../components/UserForm';
import FormResult from '../components/FormResult';
import * as database from '../database/database';
import {
  useSelector,
  useDispatch
} from 'react-redux';

const FormResultScreen = props => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState('user');
  const time = useSelector(state => state.time.time);
  const {firstName, lastName, country, email} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const formSwitch = formToShow => {
    if (formToShow === 'user') {
      setForm('user');
    } else if (formToShow === 'result') {
      setForm('result');
    }
  };

  useEffect(() => {
    setLoading(true);

    if (firstName && lastName && country && email) {
      dispatch(database.saveDataToDatabase());
      setForm('result');
    }

    const setSpinner = () => {
      setLoading(false)
    };

    setTimeout(setSpinner, 1000);
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size='large' color={Colors.primaryColor}/>
      </View>
    )
  }

  return (
    <LinearGradient colors={['#ebdb34', '#ebb734', '#a67702']} style={styles.linearGradient}>
      <ScrollView>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding"
          keyboardVerticalOffset={100}
        >
          {form === 'user' ? <UserForm formSwitch={formSwitch} title='Please fill in quick form!' navigate={true}/> :
            <FormResult time={time} navigation={props.navigation}/>}
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  linearGradient: {
    flex: 1
  }
});

export default FormResultScreen
