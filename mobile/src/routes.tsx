import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./pages/Dashboard";
import CreateDocument from "./pages/CreateDocument";
import UserRegister from "./pages/UserRegister";
import Logon from "./pages/Logon";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Logon"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
        }}>
        <Screen name="Logon" component={Logon} />
        <Screen name="UserRegister" component={UserRegister} />
        <Screen name="Dashboard" component={Dashboard} />
        <Screen name="CreateDocument" component={CreateDocument} />
      </Navigator>
    </NavigationContainer>
  );
}
