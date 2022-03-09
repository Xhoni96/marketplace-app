import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
// import { ListingScreens, AccountScreen, ListingEditScreen } from "./app/screens";
// import colors from "./app/config/colors";
// import AuthNavigator from "./app/navigation/AuthNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
// const Tab = createBottomTabNavigator();
// const icons = {
//     Feed: "home",
// hey
//
//     Account: "account",
// };
// const App = () => ;

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
});

const App = () => (
    <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    </QueryClientProvider>
);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#f8f4f4",
//         padding: 20,
//         paddingTop: 100,
//     },
// });

export default App;
