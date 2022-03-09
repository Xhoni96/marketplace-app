import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen, MessagesScreen } from "../screens";
import { MESSAGES } from "../config/routes";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Your Profile" component={AccountScreen} />
        <Stack.Screen name={MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;
