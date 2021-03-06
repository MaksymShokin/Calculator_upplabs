import React from 'react'
import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import DefaultText from './DefaultText';

const WebHistoryItem = props => {
  const {form, date, fromFormResult} = props;

  const convertedForm = Object.keys(form).map(key => {
    return [String(key), form[key]];
  });

  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const removePrefix = str => {
    return str.slice(3)
  };

  let mainContent = convertedForm.map(elem => {
    return (
      <View key={date+elem[0]} style={styles.formItem}>
        <View style={styles.formItemTitleContainer}>
          <DefaultText>{removePrefix(elem[0])}: </DefaultText>
        </View>
        <View>
          <DefaultText>{capitalize(elem[1])}</DefaultText>
        </View>
      </View>
    )
  });

  return (
    <View style={fromFormResult && styles.container}>
      {mainContent}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9
  },
  formItem: {
    flexDirection: 'row'
  },
  formItemTitleContainer: {
    width: '45%'
  }
});

export default WebHistoryItem
