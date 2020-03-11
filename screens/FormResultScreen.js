import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Image, Dimensions, ScrollView } from 'react-native';
import DefaultText from '../components/DefaultText';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';


const FormResultScreen = props => {
  const [loading, setLoading] = useState(false);
  const time = props.route.params.time;

  useEffect(() => {
    setLoading(true);

    const setSpinner = () => {
      setLoading(false)
    };

    setTimeout(setSpinner, 3000);
  }, []);

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
        <View style={styles.screen}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logos/coding.jpg')}
          />
          <View style={styles.textContainer}>
            <DefaultText style={styles.text}>
              Approximately it will take {time} working hours to create such an app.
              Of course this number it is rough estimation, but it can give an idea regarding complexity of an app.
              If you would like to receive more consultation please contact us.
            </DefaultText>
            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <CustomButton
                  text='Contact us!'
                  onPress={() => {
                    props.navigation.navigate({
                      routeName: 'ContactsScreen',
                      params: {
                        hideHeader: true
                      }
                    })
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
      </ScrollView>
    </LinearGradient>
  )
};

FormResultScreen.navigationOptions = navData => {
  return {
    headerShown: false
  }
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

export default FormResultScreen
