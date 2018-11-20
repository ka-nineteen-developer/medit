/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
// import MediaPlayer from './app/Components/MediaPlayer';
import DrawerNavigator from './app/router';

export default class App extends Component {
  render() {
    return (
      <DrawerNavigator/>
    );
  }

  componentWillMount() {
    StatusBar.setHidden(true);
  }
}