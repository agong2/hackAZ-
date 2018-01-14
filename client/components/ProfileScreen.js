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
            <Text style={{fontSize: 70, fontWeight: 'bold', textAlign: 'center'}}> Profile </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', }}>
            <Button
            title="Create Your Account"
            onPress={() => navigation.navigate('Details')}
            color="#841584"
            />
        </View>
        <Autocomplete
            getItemValue={(item) => item.label}
            items={[
              { label: 'FUCK' },
              { label: 'MY' },
              { label: 'ASS' }
            ]}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
              </div>
            }
            value={value}
            onChange={(e) => value = e.target.value}
            onSelect={(val) => value = val}
            />
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
