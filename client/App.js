import React from 'react';
import { StyleSheet, Text, View, Image, Button, AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './components/HomeScreen.js';


const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default App;
