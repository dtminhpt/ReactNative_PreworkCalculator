/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Navigator,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import Calculator from "./Apps/calculator.js";
import Settings from './Apps/settings.js';
import PowerRanger from './Apps/powerranger.js';

export default class PreworkCalculator extends Component {
  render() {
    return (
      // <Calculator />
      // <Settings />
      <PowerRanger/>
    );
  }
}


AppRegistry.registerComponent('PreworkCalculator', () => PreworkCalculator);
