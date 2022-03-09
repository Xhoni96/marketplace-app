import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListingDetailsScreen, ListingScreens } from "../screens";
import { LISTINGS, LISTING_DETAILS } from "../config/routes";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name={LISTINGS} component={ListingScreens} options={{ headerShown: false }} />
        <Stack.Screen name={LISTING_DETAILS} component={ListingDetailsScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;
