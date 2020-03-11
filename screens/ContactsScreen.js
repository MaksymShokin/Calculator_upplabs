import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import DefaultTextBold from '../components/DefaultTextBold';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { Linking } from 'expo';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const ContactsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.discussContainer}>
          <DefaultTextBold style={styles.discussText}>Ready to discuss your idea?</DefaultTextBold>
        </View>

        <View style={styles.infoContainer}>
          <DefaultTextBold style={styles.infoTitle}>PHONE:</DefaultTextBold>
          <View style={styles.infoDetails}>
            <TouchableOpacity onPress={() => Linking.openURL('tel:+1 3477061110')}>
              <DefaultText>The US: +1 347.706.1110</DefaultText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('tel:0687856878')}>
              <DefaultText>Ukraine: +38 068.785.6878</DefaultText>
            </TouchableOpacity>
            <DefaultText>Vitaliy Dyachenko, Founder</DefaultText>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <DefaultTextBold style={styles.infoTitle}>EMAIL:</DefaultTextBold>
          <TouchableOpacity onPress={() => Linking.openURL('mailto: vitaliy@upplabs.com')}>
            <DefaultText>vitaliy@upplabs.com</DefaultText>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <DefaultTextBold style={styles.infoTitle}>SKYPE:</DefaultTextBold>
          <DefaultText>dyachenko.vitaliy</DefaultText>
        </View>

        <View style={styles.infoContainer}>
          <DefaultTextBold style={styles.infoTitle}>ADDRESS:</DefaultTextBold>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.google.com/maps/place/Upplabs/@50.4524949,30.4447575,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cc25659c4dd7:0x20f0c16bd3f7f411!8m2!3d50.4524949!4d30.4469462')}>
            <View style={styles.addressDetails}>
              <DefaultText>1B Vadyma Hetmana st.</DefaultText>
              <DefaultText>Kyiv, Ukraine</DefaultText>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.logosContainer}>

          <View style={styles.singleLogoContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/place/Upplabs/@50.4524949,30.4447575,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cc25659c4dd7:0x20f0c16bd3f7f411!8m2!3d50.4524949!4d30.4469462')}>
              <Image
                style={styles.logo}
                source={require('../assets/images/logos/linkedin.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleLogoContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/UppLabs-508252232974090/')}>
              <Image
                style={styles.logo}
                source={require('../assets/images/logos/facebook.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleLogoContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/upplabs')}>
              <Image
                style={styles.logo}
                source={require('../assets/images/logos/twitter.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleLogoContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/upplabs_llc/')}>
              <Image
                style={styles.logo}
                source={require('../assets/images/logos/instagram.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleLogoContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/uppLabs')}>
              <Image
                style={styles.logo}
                source={require('../assets/images/logos/github.png')}
              />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.locationContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/place/Upplabs/@50.4524949,30.4447575,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cc25659c4dd7:0x20f0c16bd3f7f411!8m2!3d50.4524949!4d30.4469462')}>
          <Image
              source={require('../assets/images/location.png')}
              style={styles.logo}
              resizeMode='cover'
            />
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
};

export const screenOptions = navData => {
  // const hideHeader = navData.route.param.hideHeader;

  return {
    headerTitle: 'Contact Us',
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
  container: {
    flex: 1,
    alignItems: 'center'
  },
  discussContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  discussText: {
    color: 'white',
    fontSize: 34
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 90,
    flexDirection: 'row'
  },
  infoDetails: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    minHeight: 70
  },
  infoTitle: {
    fontSize: 18,
    color: Colors.primaryColor
  },
  logosContainer: {
    width: '90%',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-around',
    marginTop: 10
  },
  addressDetails: {},
  singleLogoContainer: {
    width: 50,
    height: 50,
    overflow: 'hidden'
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  locationContainer: {
    height: Dimensions.get('window').height * 0.75,
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    marginBottom: 100
  }
});

export default ContactsScreen;
