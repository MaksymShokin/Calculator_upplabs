import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native';
import DefaultText from './DefaultText';

const MobileHistoryItem = props => {
  const {form, date} = props;
debugger
  const convertedForm = Object.keys(form).map(key => {
    if (key === 'mobileDevices' || key === 'mobileContent') {
      let values = [];
      Object.keys(form[key]).forEach((val) => {
        if (form[key][val]) {
          values.push(val)
        }
      });
      return [key, values.join(', ')]
    }
    return [key, form[key]];
  });

  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const removePrefix = str => {
    return str.slice(6)
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
    <View>
      {mainContent}
    </View>
  )
};

const styles = StyleSheet.create({
  formItem: {
    flexDirection: 'row'
  },
  formItemTitleContainer: {
    width: '45%'
  }
});

export default MobileHistoryItem
