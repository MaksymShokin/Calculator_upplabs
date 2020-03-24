import React, {
  useCallback
} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import DefaultText from '../components/DefaultText';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';
import MobileForm from '../components/MobileForm';
import WebForm from '../components/WebForm';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import * as formActions from '../store/actions/formActions';
import * as timeActions from '../store/actions/timeActions';

const FormScreen = props => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form);
  const time = useSelector(state => state.time.time);

  useFocusEffect(
    useCallback(() => {
      dispatch(timeActions.resetTime())
    }, [])
  );

  const platform = formData.platform;

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
    mobileItems
  } = formData.mobile;

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
    webIntegration,
    webItems
  } = formData.web;

  const selectHandler = (field, value) => {
    dispatch(formActions.saveFormOption(field, value));
  };

  const addTime = value => {
    dispatch(timeActions.addTime(value))
  };

  const navigateToFormResult = platform => {
    if (platform === 'mobile') {
      const allValues = [
        mobilePlatform,
        mobileDesign,
        mobileAuthentication,
        mobileGeolocation,
        mobileAdmin,
        mobileNotifications,
        mobilePayments,
        mobileAnalytics,
        mobileItems
      ];

      Object.entries(mobileContent).forEach(elem => {
        if (elem[1]) {
          addTime(15)
        }
      });

      Object.entries(mobileDevices).forEach(elem => {
        if (elem[1]) {
          addTime(25)
        }
      });

      allValues.forEach(elem => {
        if (
          elem === 'ios' ||
          elem === 'android' ||
          elem === 'basic' ||
          elem === 'simple' ||
          elem === 'viaEmail' ||
          elem === 'basic'
        ) {
          addTime(15)
        } else if (
          elem === 'both' ||
          elem === 'advanced' ||
          elem === 'viaSocial' ||
          elem === 'yes' ||
          elem === 'custom'
        ) {
          addTime(25)
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
        webDesign,
        webItems,
        webIntegration
      ];

      allValues.forEach(elem => {
        if (
          elem === 'email' ||
          elem === 'basic' ||
          elem === 'simple'
        ) {
          addTime(15)
        } else if (
          elem === 'advanced' ||
          elem === 'emailPush' ||
          elem === 'yes'
        ) {
          addTime(25)
        }
      })
    }

    props.navigation.navigate({
      name: 'FormResultScreen'
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
        mobileItems={mobileItems}
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
        webIntegration={webIntegration}
        webItems={webItems}
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
    mobilePlatform &&
    mobileItems) {
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
    webIntegration &&
    webSecurity &&
    webItems) {
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
