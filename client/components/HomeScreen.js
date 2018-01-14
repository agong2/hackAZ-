import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
var t = require('tcomb-form-native');
var Form = t.form.Form;

var Person = t.struct({
  User: t.String,        // a required string
  pass: t.String
});


export default class HomeScreen extends Component {
    handleSubmit = () => {
       const value = this._form.getValue();
       console.log(value);
    }


    static navigationOptions = {
        header: null,
        title: 'Welcome',
    };
    constructor(props){
        super(props);
    }

  render() {
     const { navigate } = this.props.navigation;

    return (
        <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <View style={{width: 500, height: 200, marginTop: 100}}>
            <Text style={{fontSize: 70, fontWeight: 'bold', textAlign: 'center'}}> StudyUp </Text>
        </View>
        <Form
          ref="form"
          type={Person}
          styles={{width: 500}}
        />
        <View style={{display: 'flex', flexDirection: 'column', height: 120, justifyContent: 'space-between'}}>
            <Button
            title="Login"
            onPress={this.handleSubmit}
            color="#841584"
            />
            <Button
            title="Create Your Account"
            onPress={this.handleSubmit}
            color="#841584"
            />
            <Text style={{color:'blue', textAlign:'center'}}>Forgot Your Password?</Text>
        </View>
      </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
