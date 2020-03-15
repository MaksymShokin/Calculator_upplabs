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
import CustomButton from '../components/CustomButton';
import MobileForm from '../components/MobileForm';
import WebForm from '../components/WebForm';

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
      <MobileForm
        mobilePlatform={mobilePlatform}
        mobileDevices={mobileDevices}
        mobileDesign={mobileDesign}
        mobileAuthentication={mobileAuthentication}
        mobileGeolocation={mobileGeolocation}
        mobileAdmin={mobileAdmin}
        mobileNotifications={mobileNotifications}
        mobilePayments={mobilePayments}
        mobileContent={mobileContent}
        mobileAnalytics={mobileAnalytics}
        selectHandler={selectHandler}
      />
    )

  } else if (platform === 'web') {
    mainForm = (
      <WebForm
        webDesign={webDesign}
        webGeolocation={webGeolocation}
        webLanguages={webLanguages}
        webNotifications={webNotifications}
        webParcing={webParcing}
        webSecurity={webSecurity}
        webCommunication={webCommunication}
        webPayment={webPayment}
        webPermissions={webPermissions}
        selectHandler={selectHandler}
      />
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  platformSelectionTitleContainer: {
    marginTop: 15
  },
  platformSelectionTitleText: {
    fontSize: 26
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
