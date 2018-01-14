import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Image, Button, AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './components/HomeScreen.js';
import ProfileScreen from './components/ProfileScreen.js';
import ListScreen from './components/ListScreen.js';
import ReviewScreen from './components/ReviewScreen.js';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  List: { screen: ListScreen },
  AlansBaby: { screen: ReviewScreen }
});

export default App;
