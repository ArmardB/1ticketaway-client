import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Section from '../Section';
import NumberBall from '../NumberBall';

class HotColdAnalysis extends Component {

  render() {
    this.state = {
      number: 0
    }
    const hot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const cold = [24, 25, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
    const neutral = [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 67, 69];


    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 250, backgroundColor: '#0000FF', marginRight: 10}} >
          <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>
          Cold
            </Text>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: '#8888FF'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'white'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#FF9999'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#FF0000'}} />
      </View>
    );
  }
}

const styles = {
  cold: {
    color: 'blue',
    borderRight: 1
  },
  cool: {
    backgroundColor: '#d1e0ff'
  },
  neurtral: {
    backgroundColor: '#fdfff9'
  },
  warm: {
    backgroundColor: '#ef8888'
  },
  hot: {
    backgroundColor: '#ff0000'
  },
  textStyle: {
    textAlign: 'center'
  }
}

export default HotColdAnalysis;