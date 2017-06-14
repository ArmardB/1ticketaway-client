import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Jackpot from './Jackpot.js';

class Powerball extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Jackpot />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#2263A3'
  }
}

export default Powerball;