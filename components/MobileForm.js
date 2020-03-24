import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import DefaultText from '../components/DefaultText';
import CardSelection from '../components/CardSelection';

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
    mobileItems,
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
        titleOne='IOS'
        titleTwo='Android'
        titleThree='Both'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={mobilePlatform}
        checkbox={false}
      />

      <CardSelection
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
        checkbox={true}
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
        checkbox={false}
      />

      <CardSelection
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
        checkbox={true}
      />

      <CardSelection
        mainTitle='Will your project have any list of items?'
        field='mobileItems'
        valueOne='simple'
        valueTwo='advanced'
        valueThree='none'
        titleOne='Simple'
        titleTwo='Advanced (with filters, categories etc.)'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={mobileItems}
        checkbox={false}
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
        checkbox={false}
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
        checkbox={false}
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
        checkbox={false}
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
        checkbox={false}
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
        checkbox={false}
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
        checkbox={false}
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

