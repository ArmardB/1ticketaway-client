import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Navigation } from "react-native-navigation";
// import { registerScreens } from './screens';
import Powerball from "./Powerball";
import Header from "./Header";
import Jackpot from "./Jackpot";
import WinningNumberSection from "./WinningNumberSection";
import Card from "./Card";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import HotColdAnalysis from "./HotColdAnalysis/HotColdAnalysis";
import NumberGenerator from "./NumberPicker/NumberGenerator";
import NewsList from "./NewsFeed/NewsList";

class Main extends Component {
  render() {
    return (
      // <View style={{ height: 1000 }}>
      (
        <ScrollView>
          <Header headerText="Powerball" />
          <Card>
            <Section>
              <Jackpot />
            </Section>

            <Section>
              <WinningNumberSection />
            </Section>

            <SectionTitle headerText="Hot/Cold Analysis" />
            <Section>
              <HotColdAnalysis />
            </Section>
            <SectionTitle headerText="Number Generator" />
            <Section>
              <NumberGenerator />
            </Section>
            <Section>
              <NewsList />
            </Section>

          </Card>
        </ScrollView>
      )
      // </View>
    );
  }
}
const styles = {
  scrollViewStyle: {
    flex: 1,

    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 60
  }
};

export default Main;
