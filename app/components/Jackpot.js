import React from 'react';
import { Text, View } from 'react-native';
import Section from './Section';
import Card from './Card';


const Jackpot = () => {
  return (
    <View>
      <Text style={styles.titleText}>Annuity</Text>
      <Text style={styles.moneyLine}>40 MILLION</Text>
      <Text style={styles.titleText}>Next Drawing</Text>
      <Text style={styles.heroText}>Wednesday June 14, 2017</Text>
    </View>
  );
};

const styles = {
  titleText: {
    fontSize: 10,
    textAlign: 'center'
  },
  heroText: {
    fontSize: 16,
    textAlign: 'center'
  },
  moneyLine: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
}

export default Jackpot;