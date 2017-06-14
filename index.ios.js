import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Main from "./app/components/Main.js";

export default class oneTicketAway extends Component {
  render() {
    return (
     <View>
      <Main />
    </View>
    );
  }
}

AppRegistry.registerComponent('oneTicketAway', () => oneTicketAway);
