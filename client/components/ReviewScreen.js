import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "\n  Matched Profiles:",
      bodyText: '\n   Alan Gong\n   Major: Computer Science\n   Successful Study Sessions: 0 \n\n'
    };
  }

  render() {
    return (
      <View >

      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
         <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
        style={{ height: 140, width: 140 }}
      />
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>

                 <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
        style={{ height: 140, width: 140 }}
      />

        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>

      </Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
  //  fontFamily: 'Arial',
    fontSize: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('TextInANest', () => TextInANest);
