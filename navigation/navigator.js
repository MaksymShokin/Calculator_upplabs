import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList
} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'expo';

import MainScreen, {
  screenOptions as MainScreenOptions
} from '../screens/MainScreen';
import FormScreen from '../screens/FormScreen';
import FormResultScreen from '../screens/FormResultScreen';
import ContactsScreen, {
  screenOptions as ContactsScreenOptions
} from '../screens/ContactsScreen';
import SearchHistoryScreen, {
  screenOptions as SearchHistoryScreenOptions
} from '../screens/SearchHistoryScreen';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
  },
  headerTitleStyle: {
    fontFamily: 'raleway'
  },
  headerBackTitleStyle: {
    fontFamily: 'raleway-bold'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerRight: () => (
    <TouchableOpacity onPress={() => Linking.openURL('https://www.upplabs.com/')}>
      <Image
        source={Platform.OS === 'android' ? require('../assets/images/logos/icon-black.jpg') : require('../assets/images/logos/icon.jpg')}
        resizeMode='cover'
        style={styles.image}
      />
    </TouchableOpacity>
  )
};

const FormStack = createStackNavigator();

const FormStackNavigator = () => {
  return (
    <FormStack.Navigator
      initialRouteName="MainScreen"
      screenOptions={defaultNavigationOptions}>
      <FormStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={MainScreenOptions}
      />
      <FormStack.Screen
        name="FormScreen"
        component={FormScreen}
        options={{
          headerTitle: 'Project calculator'
        }}
      />
      <FormStack.Screen
        name="FormResultScreen"
        component={FormResultScreen}
        options={{}}
      />
      <FormStack.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          headerTitle: 'Contact us'
        }}
      />
    </FormStack.Navigator>
  );
};

const ContactsStack = createStackNavigator();

const ContactsStackNavigator = () => {
  return (
    <ContactsStack.Navigator screenOptions={defaultNavigationOptions}>
      <ContactsStack.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={ContactsScreenOptions}
      />
    </ContactsStack.Navigator>
  );
};

const HistoryStack = createStackNavigator();

const HistoryStackNavigator = () => {
  return (
    <HistoryStack.Navigator screenOptions={defaultNavigationOptions}>
      <HistoryStack.Screen
        name="HistoryScreen"
        component={SearchHistoryScreen}
        options={SearchHistoryScreenOptions}
      />
    </HistoryStack.Navigator>
  );
};

const MainDrawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <MainDrawer.Navigator
      drawerType="slide"
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <View style={{flex: 1, paddingTop: 30}}>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
              <DrawerItemList {...props} />
              <View style={styles.drawerButtonContainer}>
                <CustomButton
                  text="Visit our web site"
                  color="black"
                  onPress={() => Linking.openURL('https://www.upplabs.com/')}
                />
              </View>
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primaryColor
      }}
    >
      <MainDrawer.Screen
        name="Calculator"
        component={FormStackNavigator}
        options={{
          drawerIcon: drawerConfig => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-calculator' : 'ios-calculator'}
              size={23}
            />
          )
        }}
      />
      <MainDrawer.Screen
        name="History"
        component={HistoryStackNavigator}
        options={{
          drawerIcon: drawerConfig => (
            <Ionicons
              name='ios-archive'
              size={23}
            />
          )
        }}
      />
      <MainDrawer.Screen
        name="Contacts"
        component={ContactsStackNavigator}
        options={{
          drawerIcon: drawerConfig => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-contacts' : 'ios-contacts'}
              size={23}
            />
          )
        }}
      />
    </MainDrawer.Navigator>
  );
};

const MainAppNavigator = props => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 45,
    height: 45,
    borderRadius: 30
  },
  drawerButtonContainer: {
    marginHorizontal: 10,
    marginTop: 30
  }
});

export default MainAppNavigator;
