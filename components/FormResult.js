import React from 'react';
import {
  Dimensions,
  Image,
  View,
  StyleSheet
} from 'react-native';
import DefaultText from './DefaultText';
import CustomButton from './CustomButton';

const FormResult = props => {

  return (
    <View style={styles.screen}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logos/coding.jpg')}
      />
      <View style={styles.textContainer}>
        <DefaultText style={styles.text}>
          Approximately it will take {props.time} working hours to create such an app.
          Of course this number it is rough estimation, but it can give an idea regarding complexity of an app.
          If you would like to receive more consultation please contact us.
        </DefaultText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <CustomButton
              text='Contact us!'
              onPress={() => {
                props.navigation.navigate('ContactsScreen')
              }}
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              text='Calculate again!'
              onPress={() => {
                props.navigation.navigate('FormScreen')
              }}
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
  text: {
    fontSize: 18
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15
  },
  button: {
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.7
  }
});

export default FormResult
