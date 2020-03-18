import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView
} from 'react-native';
import DefaultText from '../components/DefaultText';
import DefaultTextBold from '../components/DefaultTextBold';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';
import CustomHeaderButton from '../components/CustomHeaderButton';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';

const MainScreen = props => {

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logos/logo-white.png')}
            style={styles.image}
            resizeMode='contain'
          />
        </View>

        <View style={styles.calcContainer}>
          <View>
            <DefaultTextBold style={styles.calcTitle}>Try our free project cost calculator!</DefaultTextBold>
          </View>
          <View>
            <DefaultText style={styles.calcText}>
              If you would like to get rough price estimation of your project than just fill in our simple form and we
              calculate the price for you!
            </DefaultText>
          </View>
          <CustomButton
            text='Try our free project calculation!'
            onPress={() => props.navigation.navigate({
              name: 'FormScreen'
            })}
          />
        </View>

      </View>
    </ScrollView>
  )
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Our Services',
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
  image: {
    width: '100%',
    height: '100%'
  },
  logoContainer: {
    width: '90%',
    height: Dimensions.get('window').height * 0.25,
    overflow: 'hidden'
  },
  calcContainer: {
    height: Dimensions.get('window').height * 0.65,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center'
  },
  calcTitle: {
    fontSize: 30,
    paddingBottom: 15
  },
  calcText: {
    fontSize: 20,
    paddingBottom: 15
  }
});

export default MainScreen;
