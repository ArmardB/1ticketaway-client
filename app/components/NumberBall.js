import React from 'react';
import { View, Text } from 'react-native';

const NumberBall = (props) => {
  return (
    <View style={styles.circle}>
      <Text style={styles.textStyle}>
        {props.number}
      </Text>
    </View>
  );
};

const styles = {
  circle: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 100 / 2,
    backgroundColor: '#eff0f2',
    borderWidth: 1,
    borderColor: '#ddd',
    // borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 3
    
  },
  textStyle: {
    color: '#000',
    paddingTop: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  }
}

export default NumberBall;