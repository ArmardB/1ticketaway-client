import React from 'react';
import { Text, View } from 'react-native';
import NumberBall from './NumberBall';
import MoneyBall from './MoneyBall';
import Section from './Section';
import Card from './Card';

const WinningNumberSection = () => {
  const winningNumbers = [2, 15, 34, 38, 42, 3];

  return (
    <Card>
      <Text style={styles.textStyle}>Saturday, June 10, 2017</Text>
      <Section>
        <NumberBall number={winningNumbers[0]} />
        <NumberBall number={winningNumbers[1]} />
        <NumberBall number={winningNumbers[2]} />
        <NumberBall number={winningNumbers[3]} />
        <NumberBall number={winningNumbers[4]} />
        <MoneyBall number={winningNumbers[5]} />
      </Section>
      <Text style={styles.textStyle}>Power Play: 2X</Text>
    </Card>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#eee',
    justifyContent: 'space-around',
    flexDirection: 'row',
    // borderColor: '#ddd',
    position: 'relative',
    marginTop: 15
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

export default WinningNumberSection;