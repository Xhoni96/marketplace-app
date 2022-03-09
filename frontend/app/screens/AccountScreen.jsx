/* eslint-disable global-require */
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeperator, Screen, Icon } from "../components";
import colors from "../config/colors";
import { mosh } from "../assets/icons";
import { MESSAGES } from "../config/routes";

const data = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "mail",
            backgroundColor: colors.secondary,
        },
        targetScreen: MESSAGES,
    },
];

export const AccountScreen = ({ navigation }) => (
    <Screen style={styles.screen}>
        <View style={styles.container}>
            <ListItem title="Johnn" subTitle="johnn96@gmail.com" image={mosh} />
        </View>
        <View style={styles.container}>
            {/* <ListItem title="Johnn" subTitle="johnn96@gmail.com" image={require("../assets/mosh.jpg")} /> */}
            <FlatList
                data={data}
                keyExtractor={(menuItem) => menuItem.title}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        onPress={() => navigation.navigate(item.targetScreen)}
                    />
                )}
                ItemSeparatorComponent={ListItemSeperator}
            />
        </View>
        <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
    </Screen>
);

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightGrey,
    },
    container: {
        marginVertical: 20,
    },
});
