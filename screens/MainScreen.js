import React from 'react';
import { View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import DefaultText from '../components/DefaultText';
import DefaultTextBold from '../components/DefaultTextBold';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';

const ServicesScreen = props => {

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

        <View style={[styles.techArticle, styles.primaryColor]}>
          <View>
            <DefaultTextBold style={styles.techArticleTitle}>Try our free project cost calculator!</DefaultTextBold>
          </View>
          <View>
            <DefaultText style={styles.techArticleText}>
              If you would like to get rough price estimation of your project than just fill in our simple form and we calculate the price for you!
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

ServicesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Our Services'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logoContainer: {
    width: '90%',
    height: 200,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  descriptionContainer: {
    marginHorizontal: 20,
    marginBottom: 50
  },
  titleContainer: {
    marginBottom: 15
  },
  title: {
    fontSize: 30,
  },
  descriptionTextContainer: {},
  description: {
    fontSize: 16
  },
  services: {
    marginTop: 35,
    marginBottom: 15
  },
  servicesTitle: {
    fontSize: 32,
    marginBottom: 10
  },
  backgroundImageContainer: {
    width: '100%',
    height: 300,
    overflow: 'hidden'
  },
  backgroundTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  backgroundTitle: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10
  },
  backgroundText: {
    color: '#fff',
    fontSize: 14
  },
  article: {
    height: 250,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  articleTitle: {
    fontSize: 16
  },
  articleText: {
    paddingVertical: 15
  },
  button: {
    paddingTop: 30
  },
  lightGrey: {
    backgroundColor: Colors.lightGrey
  },
  normalGrey: {
    backgroundColor: Colors.normalGrey
  },
  darkGrey: {
    backgroundColor: Colors.darkGrey
  },
  primaryColor: {
    backgroundColor: Colors.primaryColor
  },
  techArticle: {
    height: 450,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  techArticleTitle: {
    fontSize: 30,
    paddingBottom: 15
  },
  techArticleText: {
    fontSize: 20,
    paddingBottom: 15
  },
  emptySpace: {
    paddingBottom: 70
  }
});

export default ServicesScreen;
