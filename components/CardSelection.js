import React from 'react';
import DefaultText from './DefaultText';
import {
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import Card from './Card';
import Colors from '../constants/Colors';

const FormSelection = props => {
  const {
    mainTitle,
    field,
    valueOne,
    valueTwo,
    valueThree,
    valueFour,
    titleOne,
    titleTwo,
    titleThree,
    titleFour,
    formPress,
    cardsCount,
    stateSelection,
    checkbox
  } = props;

  let selectorOne = checkbox ? stateSelection[valueOne] : stateSelection === valueOne;
  let selectorTwo = checkbox ? stateSelection[valueTwo] : stateSelection === valueTwo;
  let selectorThree = checkbox ? stateSelection[valueThree] : stateSelection === valueThree;
  let selectorFour = checkbox ? stateSelection[valueFour] : stateSelection === valueFour;

  return (
    <View style={styles.selectionContainer}>
      <View style={styles.mainTitleContainer}>
        <DefaultText>{mainTitle}</DefaultText>
      </View>

      <View style={styles.smallCardsContainer}>
        <TouchableOpacity onPress={() => formPress(field, valueOne)}>
          <Card style={selectorOne ? styles.smallSelectedCard : styles.smallCard}>
            <DefaultText style={styles.cardText}>{titleOne}</DefaultText>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => formPress(field, valueTwo)}>
          <Card style={selectorTwo ? styles.smallSelectedCard : styles.smallCard}>
            <DefaultText style={styles.cardText}>{titleTwo}</DefaultText>
          </Card>
        </TouchableOpacity>

        {cardsCount > 2 && (
          <TouchableOpacity onPress={() => formPress(field, valueThree)}>
            <Card style={selectorThree ? styles.smallSelectedCard : styles.smallCard}>
              <DefaultText style={styles.cardText}>{titleThree}</DefaultText>
            </Card>
          </TouchableOpacity>
        )}

        {cardsCount > 3 && (
          <TouchableOpacity onPress={() => formPress(field, valueFour)}>
            <Card style={selectorFour ? styles.smallSelectedCard : styles.smallCard}>
              <DefaultText style={styles.cardText}>{titleFour}</DefaultText>
            </Card>
          </TouchableOpacity>
        )}

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  selectionContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  mainTitleContainer: {
    paddingHorizontal: 10
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
  }
});

export default FormSelection
