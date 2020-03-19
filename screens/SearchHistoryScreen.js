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
  const [calculations, setCalculations] = useState([]);
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
      fetchUserDataFromStorage().then(function () {
        dispatch(database.fetchFromDatabase()).then(result => {
          if (result !== undefined) {
            let dataFromFirebase = Object.entries(result).map(elem => {
              return elem[1]
            });
            setCalculations(dataFromFirebase)
          }
        });
      });
    }

    const setSpinner = () => {
      setIsLoading(false);
    };

    setTimeout(setSpinner, 500);
  }, [dispatch, fetchUserDataFromStorage]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color={Colors.primary}/>
      </View>
    )
  }

  if (!isLoading && calculations.length === 0) {
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
      keyExtractor={item => item.date}
      renderItem={itemData => (
        <CalculationHistoryItem
          form={itemData.item.form}
          date={itemData.item.date}
          time={itemData.item.time}
          platform={itemData.item.platform}
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


