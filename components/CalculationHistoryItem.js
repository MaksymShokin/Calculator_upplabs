import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import moment from 'moment';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import DefaultText from './DefaultText';
import DefaultTextBold from './DefaultTextBold';
import WebHistoryItem from './WebHistoryItem';
import MobileHistoryItem from './MoblieHistoryItem';

const CalculationHistoryItem = props => {
  const [showDetails, setShowDetails] = useState(false);
  const {form, time, date, platform} = props;

  const formattedDate = moment(date).format('MMMM Do YYYY, hh:mm');
  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Card style={styles.calcItem}>
      <View style={styles.summary}>
        <DefaultTextBold style={styles.time}>Total time: {time}</DefaultTextBold>
        <DefaultText style={styles.date}>{formattedDate}</DefaultText>
      </View>
      <Button
        color={Colors.primaryColor}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => {
          setShowDetails(prevState => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.itemsDetails}>
          <DefaultTextBold style={styles.platformText}>Platform: {capitalize(platform)}</DefaultTextBold>
          {platform === 'mobile' && <MobileHistoryItem form={form} date={date}/>}
          {platform === 'web' && <WebHistoryItem form={form} date={date}/>}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  calcItem: {
    margin: 20,
    padding: 10,
    alignItems: 'center'
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15
  },
  time: {
    fontSize: 16
  },
  date: {
    fontSize: 16,
    color: '#888'
  },
  itemsDetails: {
    marginTop: 15,
    width: '100%'
  },
  platformText: {
    fontSize: 16
  }
});

export default CalculationHistoryItem;
