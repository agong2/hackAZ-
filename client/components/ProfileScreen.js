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
    // <TextInput
    //     style={{fontSize: 30, backgroundColor: '#DAB8DA'}}
    //     onChangeText={(text) => this.saveData(text)}
    //     value={this.state.name} />

    componentDidMount() {
        AsyncStorage.getItem("name").then((value) => {
            this.setState({"name": value});
        }).done();
    }

    saveData(value) {
        AsyncStorage.setItem("name", value);
        this.setState({"name": value});
    }

  render() {
    return (
        <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{fontSize: 75, textAlign: 'center'}}>Dale Kim</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 30, color: 'blue', marginRight: 15}}>Major:</Text>
                <Text style={{fontSize: 30, }}> Computer Science</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 30, color: 'blue', marginRight: 20}}>Location:</Text>
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
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 30, color: 'blue', marginRight: 30}}>Schedule:</Text>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Text style={{fontSize: 22}}>CSE 230 - Calliss</Text>
                    <Text style={{fontSize: 22}}>CSE 301 - Hansford</Text>
                    <Text style={{fontSize: 22}}>CSE 310 - Nakamura</Text>
                    <Text style={{fontSize: 22}}>CSE 360 - Calliss</Text>
                    <Text style={{fontSize: 22}}>DCE 123 - Fung</Text>
                    <Text style={{fontSize: 22}}>GLG 102 - Johnson</Text>
                </View>
            </View>
            <View style={{marginTop: 40}}>
                <Button title='Edit'>

                </Button>
            </View>
            <View style={{marginTop: 25}}>
                <Button title='Start Matching'>

                </Button>
            </View>
        </View>
    );
  }
}
