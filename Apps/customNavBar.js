import React, { Component } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Navigator,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

var NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) =>{
    return
  },
  RightButton: (route, navigator, index, navState) => {
    if(route.id != 'Calculator'){
      return (
        <TouchableOpacity onPress={() => navigator.pop()}>
          <Text style={styles.btnControl}>Save</Text>
        </TouchableOpacity>
      );
    }else{
      return (
        <TouchableOpacity onPress={() => navigator.push({id: 'Settings'})}>
          <Text style={styles.btnControl}>Settings</Text>
        </TouchableOpacity>
      );
    }
  },
  Title: (route, navigator, index, navState) => {
    return;
  },
}

// export this component
module.exports = (
  <Navigator.NavigationBar
    routeMapper={NavigationBarRouteMapper} />
)

const styles = StyleSheet.create({
   btnControl: {
      color: '#000',
      marginTop: 10,
      marginRight: 10,
      fontSize: 16
   }
})