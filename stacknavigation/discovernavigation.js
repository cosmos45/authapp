import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import discover from "../src/discover";
import Guides from "../src/guides";
import Food from "../src/food";
import City from "../src/city";
import Spot from "../src/spot";
import Local from "../src/local";
import Vision from "../src/vision";

const Stack = createStackNavigator();

const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={discover}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guide"
        component={Guides}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Food"
        component={Food}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="City"
        component={City}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Spot"
        component={Spot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Local"
        component={Local}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Vision"
        component={Vision}
        options={{ headerShown: false }}
      />

      
    </Stack.Navigator>
  );
};

export { DiscoverStackNavigator };
