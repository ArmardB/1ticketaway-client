import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Section from '../Section';
import NumberBall from '../NumberBall';

class HotColdAnalysis extends Component {

  state = {
    hotNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    warmNumbers: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    neutralNumbers: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    coolNumbers: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    coldNumbers: [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    
  };

  loadHotNumbers() {
    return this.state.hotNumbers.map(hotNumber =>
      <NumberBall key={hotNumber} number={hotNumber} />
    );
  }

  loadWarmNumbers() {
    return this.state.warmNumbers.map(warmNumber =>
      <NumberBall key={warmNumber} number={warmNumber} />
    );
  }

  loadNuetralNumbers() {
    return this.state.neutralNumbers.map(neutralNumber =>
      <NumberBall key={neutralNumber} number={neutralNumber} />
    );
  }

  loadCoolNumbers() {
    return this.state.coolNumbers.map(coolNumber =>
      <NumberBall key={coolNumber} number={coolNumber} />
    );
  }

  loadColdNumbers() {
    return this.state.coldNumbers.map(coldNumber =>
      <NumberBall key={coldNumber} number={coldNumber} />
    );
  }
  
  render() {
    return (
      // ******************* finish adjusting padding for Text  *******************
      <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
        <View style={{ width: 75, height: 600, backgroundColor: '#0000FF', paddingLeft: 14 }} >
          <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', paddingBottom: 5 }}>
            Cold
            </Text>
          {this.loadHotNumbers()}
        </View>
        

        
        <View style={{ width: 75, height: 600, backgroundColor: '#8888FF', paddingLeft: 14 }} >
          <Text style={{ color: '#fff', fontWeight: 'bold', paddingLeft: 7 }}>
            Cool
            </Text>
          {this.loadWarmNumbers()}
        </View>
        

        
        <View style={{ width: 75, height: 600, backgroundColor: 'white', paddingLeft: 14 }} >
          <Text style={{ color: '#000', fontWeight: 'bold', textAlign: 'center' }}>
            Neutral
            </Text>
          {this.loadNuetralNumbers()}
        </View>
        

        
        <View style={{ width: 75, height: 600, backgroundColor: '#FF9999', paddingLeft: 14 }} >
          <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
            Warm
            </Text>
          {this.loadCoolNumbers()}
        </View>
        

        
        <View style={{ width: 75, height: 600, backgroundColor: '#FF0000', paddingLeft: 14 }} >
          <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
            Hot
            </Text>
          {this.loadCoolNumbers()}
        </View>
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