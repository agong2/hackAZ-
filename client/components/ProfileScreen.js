import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, Text, View, Image, StyleSheet, Button, Picker, TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class ProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Input Your Name',
            major: 'Input Your Major'
        }
    }
    componentDidMount() {
            AsyncStorage.getItem("name").then((value) => {
                this.setState({name: value});
            }).done();
        }
    saveData(value) {
        AsyncStorage.setItem("name", value);
        this.setState({name: value});
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
                  style={{width: 500}}
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label='<Please Choose a Location>' value="def" />
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
