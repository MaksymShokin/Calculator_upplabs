import React, { useState } from 'react';
import MainNavigator from './navigation/navigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'raleway': require('./assets/fonts/Raleway-Medium.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf')
  })
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>setDataLoaded(true)}
        onError={err=>console.log(err)}
      />
    )
  }

  return (
    <MainNavigator/>
  );
}
