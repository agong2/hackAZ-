import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';


export default class HomeScreen extends Component {
  render() {
    return (
        <View>
            <Text style={styles.gay}>god fucking dammit</Text>
            <Image style={styles.dale} source={require('../images/studying.jpg')}/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    gay: {
        color: 'blue',
    },
    dale: {
        background-repeat: 'no-repeat',
        background-position: 'top center',
        background-attachment: 'fixed',
        background-size: 'cover',
    },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
