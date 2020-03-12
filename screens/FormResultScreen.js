import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
  AsyncStorage
} from 'react-native';
import DefaultText from '../components/DefaultText';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';
import UserForm from '../components/UserForm';
import FormResult from '../components/FormResult';


const FormResultScreen = props => {
  const [loading, setLoading] = useState(false);
  const time = props.route.params.time;
  let mainContent = <UserForm/>;

  const logIn = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        mainContent = <FormResult time={time} navigation={props.navigation}/>;
      }
    } catch (error) {
      throw new Error(error)
    }
  };

  useEffect(() => {
    setLoading(true);

    const setSpinner = () => {
      setLoading(false)
    };

    setTimeout(setSpinner, 1000);
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
        {mainContent}
      </ScrollView>
    </LinearGradient>
  )
};

// FormResultScreen.navigationOptions = navData => {
//   return {
//     headerShown: false
//   }
// };

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
