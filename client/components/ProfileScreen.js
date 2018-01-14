import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, Button, Picker} from 'react-native';
import {StackNavigator} from 'react-navigation';




export default class ProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            language: null,
            major: null
        }
    }

  render() {
    return (
        <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{fontSize: 75, textAlign: 'center'}}>Dale Kim</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 30, color: 'blue'}}>Major:</Text>
                <Text style={{fontSize: 30, }}> Computer Science</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 30, color: 'blue'}}>Location:</Text>
                <Picker
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="Memorial Union" value="mu" />
                  <Picker.Item label="Hayden Library" value="hy" />
                  <Picker.Item label="Noble Library" value="nl" />
                  <Picker.Item label="Vista Del Sol" value="vds" />
                  <Picker.Item label="Barrett" value="bt" />
                  <Picker.Item label="University Towers" value="ut" />
                  <Picker.Item label="Palo Verde" value="pv" />
                </Picker>
            </View>
        </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
