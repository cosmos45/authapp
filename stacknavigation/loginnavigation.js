import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Router from "../src/Router";


const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Router/>
  );
};

export { LoginStackNavigator };
