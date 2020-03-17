import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import DefaultText from '../components/DefaultText';
import CardSelection from '../components/CardSelection';
import CardSelectionCheckbox from '../components/CardSelectionCheckbox';

const MobileForm = props => {
  const {
    mobilePlatform,
    mobileDevices,
    mobileDesign,
    mobileAuthentication,
    mobileGeolocation,
    mobileAdmin,
    mobileNotifications,
    mobilePayments,
    mobileContent,
    mobileAnalytics,
    selectHandler
  } = props;

  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Mobile app options</DefaultText>

      <CardSelection
        mainTitle='Which platform you are targeting?'
        field='mobilePlatform'
        valueOne='ios'
        valueTwo='android'
        valueThree='both'
        timeOne='20'
        timeTwo='20'
        timeThree='30'
        titleOne='IOS'
        titleTwo='Android'
        titleThree='Both'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={mobilePlatform}
      />

      <CardSelectionCheckbox
        mainTitle='Which devices you are targeting?'
        field='mobileDevices'
        valueOne='smartphones'
        valueTwo='tablets'
        valueThree='smartwatches'
        valueFour='desktop'
        titleOne='Smartphones'
        titleTwo='Tablets'
        titleThree='Smartwatches'
        titleFour='Desktop'
        formPress={selectHandler}
        cardsCount={4}
        stateSelection={mobileDevices}
      />

      <CardSelection
        mainTitle='Which design would like in your app?'
        field='mobileDesign'
        valueOne='basic'
        valueTwo='advanced'
        titleOne='Basic'
        titleTwo='Advanced'
        formPress={selectHandler}
        cardsCount={2}
        stateSelection={mobileDesign}
      />

      <CardSelectionCheckbox
        mainTitle='Do you have any additional content?'
        field='mobileContent'
        valueOne='video'
        valueTwo='photo'
        valueThree='audio'
        valueFour='streaming'
        titleOne='Videos'
        titleTwo='Photos'
        titleThree='Audios'
        titleFour='Streaming'
        formPress={selectHandler}
        cardsCount={4}
        stateSelection={mobileContent}
      />

      <CardSelection
        mainTitle='What about user authentication?'
        field='mobileAuthentication'
        valueOne='viaEmail'
        valueTwo='viaSocial'
        valueThree='none'
        titleOne='via Email'
        titleTwo='via Social networks'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={mobileAuthentication}
      />

      <CardSelection
        mainTitle='Do you need geolocation feature?'
        field='mobileGeolocation'
        valueOne='simple'
        valueTwo='advanced'
        valueThree='none'
        titleOne='Simple'
        titleTwo='Advanced'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={mobileGeolocation}
      />

      <CardSelection
        mainTitle='Do you need payments feature?'
        field='mobilePayments'
        valueOne='yes'
        valueTwo='no'
        titleOne='Yes'
        titleTwo='No'
        formPress={selectHandler}
        cardsCount={2}
        stateSelection={mobilePayments}
      />

      <CardSelection
        mainTitle='Do you need push notifications?'
        field='mobileNotifications'
        valueOne='basic'
        valueTwo='custom'
        valueThree='none'
        titleOne='Basic'
        titleTwo='Custom'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={mobileNotifications}
      />

      <CardSelection
        mainTitle='Would you like to track analytics?'
        field='mobileAnalytics'
        valueOne='basic'
        valueTwo='advanced'
        valueThree='none'
        titleOne='Basic'
        titleTwo='Advanced'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={mobileAnalytics}
      />

      <CardSelection
        mainTitle='Do you need admin panel?'
        field='mobileAdmin'
        valueOne='yes'
        valueTwo='no'
        titleOne='Yes'
        titleTwo='No'
        formPress={selectHandler}
        cardsCount={2}
        stateSelection={mobileAdmin}
      />

    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    marginTop: 15
  }
});

export default MobileForm

