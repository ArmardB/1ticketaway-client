import React from 'react';
import { View, Text } from 'react-native';

const MoneyBall = (props) => {
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
    borderRadius: 100 / 2,
    backgroundColor: '#FE0600',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  textStyle: {
    color: '#fff',
    paddingTop: 10,
    paddingLeft: 12,
    opacity: 1,
    fontWeight: 'bold',
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  }
}

export default MoneyBall;