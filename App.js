import React, { Component } from "react";
import axios from "axios";
import Router from "./src/Router";
import { baseURL } from "./src/config";
import { StyleSheet, View, Image } from "react-native";


import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Discover from "./src/discover";
import Profile from "./src/profile";
import Visit from "./src/visits";
import { MainStackNavigator } from "./stacknavigation/stacknavigation";
import { DiscoverStackNavigator } from "./stacknavigation/discovernavigation";
import { LoginStackNavigator } from "./stacknavigation/loginnavigation";


const Tab = createMaterialBottomTabNavigator();

const logo = require("./assets/images/logoy.png");



function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name=" "
        component={MainStackNavigator}
        options={{
          tabBarColor: "#18c1a5",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={DiscoverStackNavigator}
        options={{
          tabBarColor: "#212b4c",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="   "
        component={Visit}
        options={{
          tabBarColor: "#7589aa",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="    "
        component={LoginStackNavigator}
        options={{
          tabBarColor: "#e6e6e6",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}  


export default class App extends Component {
  componentWillMount() {
    axios.defaults.baseURL = baseURL;
    axios.defaults.timeout = 1500;
  }
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 10);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          <Image
            source={logo}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
      </View>
    );  
    return (
      [
      
      <NavigationContainer>
        {this.state.isVisible === true ? Splash_Screen : null}
        <MyTabs />
      </NavigationContainer>,
    ]
    );
    
      
    
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

