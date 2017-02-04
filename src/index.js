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
  View,
  Button,
  Platform
} from 'react-native';
import Crashes from 'mobile-center-crashes';

const type = Platform.select({
    ios: { name: 'iOS' },
    android: { name: 'Android' },
})

export default class OctoGrom extends Component {

    nativeCrash(){
        Crashes.generateTestCrash();
    }

    jsCrash(){
        this.fun1();
    }

    fun1(){
        this.fun2();
    }

    fun2(){
        this.fun3();
    }

    fun3(){
        throw Error("Mobile Center Test Error!!!!");
    }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! You are on: {type.name}
        </Text>
        <Button title="Native Crash" onPress={() => this.nativeCrash()}/>
        <Button title="JS Crash" onPress={() => this.jsCrash()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OctoGrom', () => OctoGrom);
