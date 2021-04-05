import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Router from "../src/Router";

import Profile from "/Users/omkarzende/reactnative/authapp/src/profile";
import Registration from "/Users/omkarzende/reactnative/authapp/src/components/Register";
import SigninScreen from "/Users/omkarzende/reactnative/authapp/src/components/Login";


const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Router/>
  );
};

export { LoginStackNavigator };
