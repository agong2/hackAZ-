import React, { Component } from 'react'
import { View } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'
import {StackNavigator} from 'react-navigation';
import { AsyncStorage, AppRegistry, Text, Image, StyleSheet, Button, Picker, TextInput} from 'react-native';

const fruits = ['CSE310', 'CSE301', 'CSE360', 'GLG102', 'DCE123']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]<Text style={{fontSize: 22}}>CSE 230 - Calliss</Text>

const renderLabel = (label, style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image style={{width: 42, height: 42}} source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}} />
      <View style={{marginLeft: 10}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  )
}

export default class ListScreen extends Component {
  state = { selectedFruits: [] }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <View>
        <SelectMultiple
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
      <View>
      <Button
      title="List Matches"
      onPress={() =>
              navigate('AlansBaby')}
      color="#841584">
      </Button>
      </View>
      </View>
    )
  }
}
