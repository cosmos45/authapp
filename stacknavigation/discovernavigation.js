import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import discover from "/Users/omkarzende/reactnative/authapp/src/discover";
import Guides from "/Users/omkarzende/reactnative/authapp/src/guides";

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
    </Stack.Navigator>
  );
};

export { DiscoverStackNavigator };
