
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
const TopNavigation = () => (
  <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#eee' }}>
    <View style={{ flex: 1 }}><Text>My App</Text></View>
    <Menu onSelect={(value) => this.filter(value)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
          <Text>Over 18s</Text>
        </MenuOption>
        <MenuOption value={2}>
          <Text>Under 18s</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

export default class Index extends Component {
  filter(x){

  }
  render() {
    return (
      <View style={styles.container}>
        <MenuContext style={{ flex: 1 }}>
    <TopNavigation/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Hello!</Text></View>
  </MenuContext>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20
    
  },
});


