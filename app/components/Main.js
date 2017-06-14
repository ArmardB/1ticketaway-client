import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
// import { registerScreens } from './screens';
import Powerball from './Powerball';
import Header from './Header';
import Jackpot from './Jackpot';
import WinningNumberSection from './WinningNumberSection';
import Card from './Card';
import Section from './Section';
import SectionTitle from './SectionTitle';
import HotColdAnalysis from './HotColdAnalysis/HotColdAnalysis';

class Main extends Component {
  render() {
    return (
      <View >
        <Header headerText="Powerball" />
        <Card>
          <Section>
            <Jackpot />
          </Section>
        
          <Section>
            <WinningNumberSection />
          </Section>
          <SectionTitle headerText="Hot/Cold Analysis"/>
          <HotColdAnalysis />
        </Card>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
};

export default Main;