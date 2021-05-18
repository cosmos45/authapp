import React from "react";
import { Scene, Stack, Router, Actions } from "react-native-router-flux";
import { StyleSheet, StatusBar } from "react-native";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MainStackNavigator } from "../stacknavigation/stacknavigation";
import { DiscoverStackNavigator } from "../stacknavigation/discovernavigation";
import { LoginStackNavigator } from "../stacknavigation/loginnavigation";
import Discover from "../src/discover";
import Profile from "../src/profile";
import Visit from "../src/visits";
import { VisitStackNavigator } from "../stacknavigation/visitnavigation";

const Tab = createMaterialBottomTabNavigator();


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
        component={VisitStackNavigator}
        options={{
          tabBarColor: "#7589aa",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="    "
        component={Profile}
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
const RouterComponent = () => {
  return (
    <Router>
      <Stack hideNavBar key="root">
        <Stack
          key="auth"
          type="reset"
          navigationBarStyle={style.navBarStyle}
          titleStyle={style.titleStyle}
        >
          <Scene title="Sign In" key="login" component={Login} initial />
          <Scene title="Register" key="register" component={Register} />
        </Stack>
        <Stack
          key="main"
          type="reset"
          navigationBarStyle={style.navBarStyle}
          titleStyle={style.titleStyle}
        >
          <Scene title="Home" key="home" component={MyTabs} initial />
        </Stack>
      </Stack>
    </Router>
  );
};

const style = StyleSheet.create({
  
  titleStyle: {
    flexDirection: "row",
    width: 100,
  },
});

export default RouterComponent;