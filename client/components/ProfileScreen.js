import React from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';


//export default class ProfileScreen extends React.Component {
  class ProfileScreen extends React.Component {

    constructor (props) {
      super(props)
      this.state = {
        value: '',
      }
    }

    render() {
      return (
        <ReactAutocomplete
          items={[
            { id: 'foo', label: 'foo' },
            { id: 'bar', label: 'bar' },
            { id: 'baz', label: 'baz' },
          ]}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.label}
          renderItem={(item, highlighted) =>
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
            >
              {item.label}
            </div>
          }
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={value => this.setState({ value })}
        />
      )
    }
  }

ReactDOM.render(<MyInput />, document.body)
