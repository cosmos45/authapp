import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../src/components/Home";
import Postdetails from "../src/postDetails";
import Budget from "../src/budget";


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

        <Stack.Screen
          name="Budget"
          component={Budget}
          options={{ headerShown: false }}
        />


        
      </Stack.Navigator>
    );

}

export {MainStackNavigator}

