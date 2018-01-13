import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';



export default class HomeScreen extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
        <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <View style={{width: 500, height: 200, marginTop: 100}}>
            <Text style={{fontSize: 70, fontWeight: 'bold', textAlign: 'center'}}> Study Up! </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', }}>
            <Button
            title="Create Your Account"
            onPress={() => navigation.navigate('Details')}
            color="#841584"
            />
        </View>
      </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
