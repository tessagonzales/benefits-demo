import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import Main from './components/Main'

export default class benefits_demo extends React.Component {
  render() {
    return (
      <View>
        <Main />
      </View>
    );
  }
};

AppRegistry.registerComponent('benefits_demo', () => benefits_demo);
