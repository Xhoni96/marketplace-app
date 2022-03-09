import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ACCOUNT, FEED, LISTING_EDIT } from "../config/routes";
import { ListingEditScreen } from "../screens";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const icons = {
    [FEED]: "home",
    // [listingEdit]: "plus-circle",
    [ACCOUNT]: "account",
};

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name={icons[route.name]} size={size} color={color} />
            ),
        })}
    >
        <Tab.Screen name={FEED} component={FeedNavigator} options={{ headerShown: false }} />
        <Tab.Screen
            name={LISTING_EDIT}
            component={ListingEditScreen}
            options={{
                tabBarLabelStyle: { display: "none" },
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: () => <NewListingButton />,
            }}
        />
        <Tab.Screen name={ACCOUNT} component={AccountNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
);

export default AppNavigator;
