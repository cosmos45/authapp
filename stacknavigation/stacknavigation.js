import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "/Users/omkarzende/reactnative/authapp/src/components/Home";
import Postdetails from "../src/postDetails";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Postdetails"
          component={Postdetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );

}

export {MainStackNavigator}

