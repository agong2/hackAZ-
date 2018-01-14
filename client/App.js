import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Image, Button, AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './components/HomeScreen.js';
import ProfileScreen from './components/ProfileScreen.js';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default App;
