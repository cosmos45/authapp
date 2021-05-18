import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import visit from "../src/visits";
import rating from "../src/rating";

import Bossbot from "../src/bossbot";

const Stack = createStackNavigator();

const VisitStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="visit"
        component={visit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="rating"
        component={rating}
        options={{ headerShown: false }}
      />
      <Stack.Screen
          name="Bossbot"
          component={Bossbot}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
    
  );
};

export { VisitStackNavigator };
