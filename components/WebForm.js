import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import DefaultText from '../components/DefaultText';
import CardSelection from '../components/CardSelection';

const WebForm = props => {
  const {
    webDesign,
    webGeolocation,
    webLanguages,
    webNotifications,
    webParcing,
    webSecurity,
    webCommunication,
    webPayment,
    webPermissions,
    selectHandler
  } = props;

  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Web project options</DefaultText>

      <CardSelection
        mainTitle='Which design would like in your app?'
        field='webDesign'
        valueOne='basic'
        valueTwo='advanced'
        titleOne='Basic'
        titleTwo='Advanced'
        formPress={selectHandler}
        cardsCount={2}
        stateSelection={webDesign}
        checkbox={false}
      />

      <CardSelection
        mainTitle='Do you need multilingual support?'
        field='webLanguages'
        valueOne='basic'
        valueTwo='advanced'
        titleOne='Basic'
        titleTwo='Advanced'
        formPress={selectHandler}
        cardsCount={2}
        stateSelection={webLanguages}
        checkbox={false}
      />

      <CardSelection
        mainTitle='Do you need geolocation feature?'
        field='webGeolocation'
        valueOne='simple'
        valueTwo='advanced'
        valueThree='none'
        titleOne='Simple'
        titleTwo='Advanced'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={webGeolocation}
        checkbox={false}
      />

      <CardSelection
        mainTitle='Would you like data security features?'
        field='webSecurity'
        valueOne='simple'
        valueTwo='advanced'
        valueThree='none'
        titleOne='Simple'
        titleTwo='Advanced'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={webSecurity}
        checkbox={false}
      />

      <CardSelection
        mainTitle='Do you need a data parcing service?'
        field='webParcing'
        valueOne='simple'
        valueTwo='advanced'
        valueThree='none'
        titleOne='Simple'
        titleTwo='Advanced'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={webParcing}
        checkbox={false}
      />

      <CardSelection
        mainTitle='Do you need notifications?'
        field='webNotifications'
        valueOne='email'
        valueTwo='emailPush'
        valueThree='none'
        titleOne='Email'
        titleTwo='Email + Push'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={webNotifications}
        checkbox={false}
      />

      <CardSelection
        mainTitle='Do you need payment systems integration?'
        field='webPayment'
        valueOne='simple'
        valueTwo='advanced'
        valueThree='none'
        titleOne='Simple'
        titleTwo='Advanced'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={webPayment}
        checkbox={false}
      />

      <CardSelection
        mainTitle='Do you need a communications feature?'
        field='webCommunication'
        valueOne='simple'
        valueTwo='advanced'
        valueThree='none'
        titleOne='Simple'
        titleTwo='Advanced'
        titleThree='None'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={webCommunication}
        checkbox={false}
      />

      <CardSelection
        mainTitle='Will you need to set permissions?'
        field='webPermissions'
        valueOne='simple'
        valueTwo='advanced'
        valueThree='default'
        titleOne='Simple'
        titleTwo='Advanced'
        titleThree='Default'
        formPress={selectHandler}
        cardsCount={3}
        stateSelection={webPermissions}
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

export default WebForm
