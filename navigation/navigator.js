import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import FormScreen from '../screens/FormScreen';
import FormResultScreen from '../screens/FormResultScreen';
import Colors from '../constants/Colors';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#fff'
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.mainBlue
};

const FormStack = createStackNavigator();

const FormStackNavigator = () => {
  return (
    <FormStack.Navigator
      screenOptions={{

      }}>
      <FormStack.Screen
        name="MainScreen"
        component={MainScreen}
      />
      <FormStack.Screen
        name="FormScreen"
        component={FormScreen}
      />
      <FormStack.Screen
        name="FormResultScreen"
        component={FormResultScreen}
      />
    </FormStack.Navigator>
  );
};

const MainAppNavigator = props => {

  return (
    <NavigationContainer>
      <FormStackNavigator/>
    </NavigationContainer>
  );
};

export default MainAppNavigator;
