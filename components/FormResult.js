import React from 'react';
import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import DefaultText from './DefaultText';
import CustomButton from './CustomButton';
import * as formActions from '../store/actions/formActions';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import DefaultTextBold from './DefaultTextBold';
import MobileHistoryItem from './MoblieHistoryItem';
import WebHistoryItem from './WebHistoryItem';

const FormResult = props => {
  const dispatch = useDispatch();
  const {platform, web, mobile} = useSelector(state => state.form);
  const date = new Date();

  const calculateAgain = () => {
    dispatch(formActions.resetForm());
    props.navigation.navigate('FormScreen')
  };

  const NavigateToHomeScreen = () => {
    dispatch(formActions.resetForm());
    props.navigation.navigate('MainScreen')
  };

  return (
    <View style={styles.screen}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logos/coding.jpg')}
      />

      <View style={styles.appContainer}>
        <View style={styles.header}>
          <DefaultTextBold style={styles.headerText}>Your app specifications</DefaultTextBold>
        </View>
        {platform === 'mobile' && <MobileHistoryItem form={mobile} date={date} fromFormResult={true}/>}
        {platform === 'web' && <WebHistoryItem form={web} date={date} fromFormResult={true}/>}
      </View>

      <View style={styles.textContainer}>
        <DefaultText style={styles.text}>
          Approximately it will take {props.time} working hours to create such an app.
          Of course this number it is rough estimation, but it can give an idea regarding complexity of an app.
          If you would like to receive more consultation please contact us.
        </DefaultText>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRow}>
          <View style={styles.button}>
            <CustomButton
              text='Contact us!'
              onPress={() => {
                props.navigation.navigate('ContactsScreen')
              }}
            />
          </View>
          <TouchableOpacity onPress={NavigateToHomeScreen}>
            <View style={styles.iconContainer}>
              <Ionicons
                name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                size={40}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          <View style={styles.calcButton}>
            <CustomButton
              text='Calculate again!'
              onPress={calculateAgain}
            />
          </View>
        </View>
      </View>

    </View>
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
  },
  logo: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
  },
  textContainer: {
    margin: 15
  },
  appContainer: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center'
  },
  header: {
    marginVertical: 15
  },
  headerText: {
    fontSize: 20
  },
  text: {
    fontSize: 18
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 50
  },
  buttonsRow: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around'
  },
  button: {
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.6
  },
  calcButton: {
    width: '100%'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginLeft: 20
  }
});

export default FormResult
