import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

import DefaultText from '../components/DefaultText';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import CardSelection from '../components/CardSelection';
import CardSelectionCheckbox from '../components/CardSelectionCheckbox';
import CustomButton from '../components/CustomButton';

const FormScreen = props => {
  const [platform, setPlatform] = useState('');

  //mobile states
  const [mobilePlatform, setMobilePlatform] = useState('');
  const [mobileDevices, setMobileDevices] = useState({
    smartphones: false,
    tablets: false,
    smartwatches: false,
    desktop: false
  });
  const [mobileDesign, setMobileDesign] = useState('');
  const [mobileAuthentication, setMobileAuthentication] = useState('');
  const [mobileGeolocation, setMobileGeolocation] = useState('');
  const [mobileAdmin, setMobileAdmin] = useState('');
  const [mobileNotifications, setMobileNotifications] = useState('');
  const [mobilePayments, setMobilePayments] = useState('');
  const [mobileContent, setMobileContent] = useState({
    video: false,
    photo: false,
    audio: false,
    streaming: false
  });
  const [mobileAnalytics, setMobileAnalytics] = useState('');

  // desktop states
  const [webDesign, setWebDesign] = useState('');
  const [webGeolocation, setWebGeolocation] = useState('');
  const [webLanguages, setWebLanguages] = useState('');
  const [webNotifications, setWebNotifications] = useState('');
  const [webParcing, setWebParcing] = useState('');
  const [webSecurity, setWebSecurity] = useState('');
  const [webCommunication, setWebCommunication] = useState('');
  const [webPayment, setWebPayment] = useState('');
  const [webPermissions, setWebPermissions] = useState('');

  const selectHandler = (field, value) => {
    switch (field) {
      case 'platform':
        setPlatform(value);
        break;
      case 'mobilePlatform':
        setMobilePlatform(value);
        break;
      case 'mobileDevice':
        setMobileDevices({...mobileDevices, [value]: !(mobileDevices[value])});
        break;
      case 'mobileDesign':
        setMobileDesign(value);
        break;
      case 'mobileAuthentication':
        setMobileAuthentication(value);
        break;
      case 'mobileGeolocation':
        setMobileGeolocation(value);
        break;
      case 'mobileAdmin':
        setMobileAdmin(value);
        break;
      case 'mobileNotifications':
        setMobileNotifications(value);
        break;
      case 'mobilePayments':
        setMobilePayments(value);
        break;
      case 'mobileContent':
        setMobileContent({...mobileContent, [value]: !(mobileContent[value])});
        break;
      case 'mobileAnalytics':
        setMobileAnalytics(value);
        break;
      case 'webGeolocation':
        setWebGeolocation(value);
        break;
      case 'webLanguages':
        setWebLanguages(value);
        break;
      case 'webNotifications':
        setWebNotifications(value);
        break;
      case 'webParcing':
        setWebParcing(value);
        break;
      case 'webSecurity':
        setWebSecurity(value);
        break;
      case 'webDesign':
        setWebDesign(value);
        break;
      case 'webCommunication':
        setWebCommunication(value);
        break;
      case 'webPayment':
        setWebPayment(value);
        break;
      case 'webPermissions':
        setWebPermissions(value);
        break;
      default: {
        break;
      }
    }
  };

  const navigateToFormResult = platform => {
    let time = 30;
    debugger

    if (platform === 'mobile') {
      const allValues = [
        mobilePlatform,
        mobileDesign,
        mobileAuthentication,
        mobileGeolocation,
        mobileAdmin,
        mobileNotifications,
        mobilePayments,
        mobileAnalytics
      ];

      Object.entries(mobileContent).forEach(elem => {
        if (elem[1]) {
          time += 15
        }
      });

      Object.entries(mobileDevices).forEach(elem => {
        if (elem[1]) {
          time += 25
        }
      });

      allValues.forEach(elem => {
        if (
          elem === 'IOS' ||
          elem === 'android' ||
          elem === 'basic' ||
          elem === 'simple' ||
          elem === 'viaEmail' ||
          elem === 'basic'
        ) {
          time += 15
        } else if (
          elem === 'both' ||
          elem === 'advanced' ||
          elem === 'viaSocial' ||
          elem === 'yes' ||
          elem === 'custom'
        ) {
          time += 30
        }
      })
    } else if (platform === 'web') {
      const allValues = [
        webSecurity,
        webPermissions,
        webPayment,
        webParcing,
        webNotifications,
        webLanguages,
        webGeolocation,
        webCommunication,
        webDesign
      ];

      allValues.forEach(elem => {
        if (
          elem === 'email' ||
          elem === 'basic' ||
          elem === 'simple'
        ) {
          time += 20
        } else if (
          elem === 'advanced' ||
          elem === 'emailPush' ||
          elem === 'yes'
        ) {
          time += 35
        }
      })
    }

    props.navigation.navigate({
      name: 'FormResultScreen',
      params: {
        time: time
      }
    })
  };

  let mainForm;

  if (platform === 'mobile') {
    mainForm = (
      <View style={styles.screen}>
        <DefaultText style={styles.platformSelectionTitleText}>Mobile app options</DefaultText>

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
        />

        <CardSelectionCheckbox
          mainTitle='Which devices you are targeting?'
          field='mobileDevice'
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
  } else if (platform === 'web') {
    mainForm = (
      <View style={styles.screen}>
        <DefaultText style={styles.platformSelectionTitleText}>Web project options</DefaultText>

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
        />

      </View>
    )
  }

  let mobileSubmitButton;

  if (platform === 'mobile' &&
    mobileContent &&
    mobileGeolocation &&
    mobileDevices &&
    mobileAnalytics &&
    mobilePayments &&
    mobileAdmin &&
    mobileAuthentication &&
    mobileDesign &&
    mobileNotifications &&
    mobilePlatform) {
    mobileSubmitButton = (
      <CustomButton
        text='Calculate estimations!'
        onPress={() => navigateToFormResult('mobile')}
      />
    )
  }

  let webSubmitButton;

  if (platform === 'web' &&
    webCommunication &&
    webDesign &&
    webGeolocation &&
    webLanguages &&
    webNotifications &&
    webParcing &&
    webPayment &&
    webPermissions &&
    webSecurity) {
    webSubmitButton = (
      <CustomButton
        text='Calculate estimations!'
        onPress={() => navigateToFormResult('web')}
      />
    )
  }

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.platformSelectionTitleContainer}>
          <DefaultText style={styles.platformSelectionTitleText}>I want to build a</DefaultText>
        </View>
        <View style={styles.bigContainer}>
          <TouchableOpacity onPress={() => selectHandler('platform', 'web')}>
            <Card style={platform === 'web' ? styles.bigSelectedCard : styles.bigCard}>
              <DefaultText style={styles.cardText}>Web project</DefaultText>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectHandler('platform', 'mobile')}>
            <Card style={platform === 'mobile' ? styles.bigSelectedCard : styles.bigCard}>
              <DefaultText style={styles.cardText}>Mobile app</DefaultText>
            </Card>
          </TouchableOpacity>
        </View>

        {mainForm}

        <View style={styles.submitButtonContainer}>
          {mobileSubmitButton}
          {webSubmitButton}
        </View>

      </View>
    </ScrollView>
  )
};

FormScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Our Services'
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  platformSelectionTitleContainer: {
    marginTop: 15
  },
  platformSelectionTitleText: {
    fontSize: 22
  },
  selectionContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  bigContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15
  },
  bigCard: {
    width: Dimensions.get('window').width * 0.43,
    height: Dimensions.get('window').width * 0.43,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigSelectedCard: {
    width: Dimensions.get('window').width * 0.43,
    height: Dimensions.get('window').width * 0.43,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor
  },
  smallCardsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  smallCard: {
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  smallSelectedCard: {
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: Colors.primaryColor
  },
  cardText: {
    fontSize: 16
  },
  submitButtonContainer: {
    marginTop: 20,
    marginBottom: 50
  }
});

export default FormScreen
