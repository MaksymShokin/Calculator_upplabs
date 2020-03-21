import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import DefaultText from '../components/DefaultText';
import DefaultTextBold from '../components/DefaultTextBold';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';
import CustomHeaderButton from '../components/CustomHeaderButton';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import * as userActions from '../store/actions/userActions';
import Animation from '../components/Animation'

const MainScreen = props => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  const fetchUserDataFromStorage = async () => {
    try {
      const userDataFormStorage = await AsyncStorage.getItem('userData');
      const transformedData = JSON.parse(userDataFormStorage);

      if (transformedData.hasOwnProperty('firstName')) {
        const {firstName, lastName, email, country, company} = transformedData;
        dispatch(userActions.saveUserData(firstName, lastName, email, country, company));

        return true
      }
    } catch (error) {
      throw new Error(error)
    }
  };

  useEffect(() => {
    setIsLoading(true);

    if (!userData.firstName) {
      fetchUserDataFromStorage();
    }

    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.loadingSpinner}>
        <ActivityIndicator size='large' color={Colors.primary}/>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <ImageBackground
            source={require('../assets/images/wood3.jpg')} style={styles.image}
          >
            <Animation/>
          </ImageBackground>
        </View>

        <View style={styles.calcContainer}>
          <View>
            <DefaultTextBold style={styles.calcTitle}>Try our free project cost calculator!</DefaultTextBold>
          </View>
          <View>
            <DefaultText style={styles.calcText}>
              If you would like to get rough price estimation of your project than just fill in our simple form and we
              calculate the price for you!
            </DefaultText>
          </View>
          <CustomButton
            text='Try our free project calculation!'
            onPress={() => props.navigation.navigate({
              name: 'FormScreen'
            })}
          />
        </View>

      </View>
    </ScrollView>
  )
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Upplabs',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  animationContainer: {
    height: 350,
    width: '100%'
  },
  loadingSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  calcContainer: {
    height: Dimensions.get('window').height * 0.60,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    borderTopWidth: 1
  },
  calcTitle: {
    fontSize: 30,
    paddingBottom: 15
  },
  calcText: {
    fontSize: 20,
    paddingBottom: 15
  }
});

export default MainScreen;
