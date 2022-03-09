import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegistryScreen, WelcomeScreen } from "../screens";
import { WELCOME, LOGIN, REGISTER } from "../config/routes";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name={REGISTER} component={RegistryScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;
