import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./pages/Dashboard";
import CreateDocument from "./pages/CreateDocument";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
        }}>
        <Screen name="Dashboard" component={Dashboard} />
        <Screen name="CreateDocument" component={CreateDocument} />
      </Navigator>
    </NavigationContainer>
  );
}
