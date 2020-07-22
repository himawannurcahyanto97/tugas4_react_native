/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView,
  View, Text, StatusBar} from 'react-native';
import Contents from "./Component/Contents";



export default class App extends Component {
  render () {
    return (
      <ScrollView>
      <View>
      <StatusBar backgroundColor = "red" />
      <View style={{backgroundColor:"#005b96"}}>
      <Text style={{color:"white", fontSize:20, textAlign:"center", marginTop:20, marginBottom:30}}> KALKULATOR REACT NATIVE</Text>
      </View>
      <Contents garis="_____________________________________________"/>
      </View>
      </ScrollView>
      )
  }
}
