import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import { AppText, ListItem } from "../components";
import { mosh } from "../assets/icons";

export const ListingDetailsScreen = ({ route }) => (
    <View>
        <Image style={styles.image} source={route.params.image} />
        <View style={styles.container}>
            <AppText style={styles.title}>{route.params.title}</AppText>
            <AppText style={styles.price}>{route.params.price}</AppText>
            <View style={styles.userContainer}>
                <ListItem image={mosh} title="Kerry J. Young" subTitle="5 listing" />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        marginVertical: 10,
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    userContainer: {
        marginVertical: 40,
    },
});
