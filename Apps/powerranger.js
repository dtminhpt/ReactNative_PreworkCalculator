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
import Calculator from './calculator.js'
import Settings from './settings.js';
import CustomNavBar from './customNavBar.js'

export default class PowerRanger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sceneTransition: 'FloatFromRight',
        }
    }
  render() {
    return (
      <Navigator
        initialRoute={{id: 'Calculator'}}
        renderScene={this.renderScene.bind(this)}

        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        navigationBar={CustomNavBar}
        configureScene={this.configureScene.bind(this)}
      />
    );
  }

  // To navigate to page based on page ID
  renderScene(route, navigator) {
    switch (route.id) {
      case 'Calculator':
        return <Calculator navigator={navigator}/>
        break;
      case 'Settings':
        return <Settings navigator={navigator}/>
        break;
      default:
    }
  }

  // config scene transition, change scene transition based on Setting
  configureScene(route, routeStack){
    //@Todo, change to scene transition from Asynstorage vale
    // this.getSceneTransition() ;
    // var temp = this.state.sceneTransition ;
    // return Navigator.SceneConfigs[temp];
    return Navigator.SceneConfigs.FloatFromRight;
  }

  async getSceneTransition(){
    try{
      let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
      // Store value to State
      this.setState({
        sceneTransition : sceneTransitionValue
      });
    }catch(error){
      console.log("Hmm, something when wrong when get data..." + error);
    }
  }
}