import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import Colors from '../constants/Colors';

export default class Animation extends Component {
  constructor() {
    super();
    this.state = {
      animValue: new Animated.Value(130)
    };
  }

  handleSelect = () => {
    this.state.animValue._value > 200
      ? Animated.timing(this.state.animValue, {
        toValue: 130,
        duration: 2500
      }).start()
      : Animated.timing(this.state.animValue, {
        toValue: 250,
        duration: 2500
      }).start();
  };

  renderRectangle = () => {
    let rotateAnimation = this.state.animValue.interpolate({
      inputRange: [130, 250],
      outputRange: ['0deg', '720deg']
    });

    const customStyle = {
      height: this.state.animValue,
      width: this.state.animValue,
      transform: [{rotate: rotateAnimation}]
    };

    return (
      <Animated.View style={[styles.rectangle, customStyle]}>
        <TouchableWithoutFeedback onPress={() => this.handleSelect()}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('../assets/images/calculator.png')}
            />
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderRectangle()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectangle: {
    backgroundColor: Colors.primaryColor,
    width: 130,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  image: {
    height: 150,
    width: 150
  }
});
