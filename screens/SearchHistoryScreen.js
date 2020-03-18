import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
  FlatList
} from 'react-native';
import DefaultText from '../components/DefaultText';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import * as database from '../database/database';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import Colors from '../constants/Colors';
import * as userActions from '../store/actions/userActions';
import DefaultTextBold from '../components/DefaultTextBold';
import CalculationHistoryItem from '../components/CalculationHistoryItem';


const SearchHistoryScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  const [calculations, setCalculations] = useState([]);

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
      fetchUserDataFromStorage().then(function () {
        dispatch(database.fetchFromDatabase()).then(result => {
          debugger
          if (result !== undefined) {
            setCalculations(Object.entries(result));
          }
          console.log(calculations)
        });
      });
    }



      setIsLoading(false);

  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color={Colors.primary}/>
      </View>
    )
  }

  if (calculations.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultTextBold style={styles.placeholderText}>
          No calculations found. Maybe start adding some?)
        </DefaultTextBold>
      </View>
    )
  }

  return (
    <FlatList
      data={calculations}
      keyExtractor={item => item[0]}
      renderItem={itemData => (
        <CalculationHistoryItem
          form={itemData.item[1]}
          date={itemData.item[1].date.format('MMMM Do YYYY, hh:mm')}
          time={itemData.item[1].time}
        />
      )}
    />
  )
};


export const screenOptions = navData => {
  return {
    headerTitle: 'Search History',
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholderText: {
    fontSize: 22,
    paddingHorizontal: 10
  }
});

export default SearchHistoryScreen


