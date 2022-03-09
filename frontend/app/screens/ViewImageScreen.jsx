/* eslint-disable global-require */
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { chair } from "../assets/icons";

export const ViewImageScreen = () => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color={colors.white} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color={colors.white} />
            </View>
        </View>

        <Image style={styles.image} resizeMode="contain" source={chair} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    iconContainer: {
        alignItems: "center",
        flexDirection: "row",
    },

    closeIcon: {
        top: 50,
        left: 40,
    },
    deleteIcon: {
        position: "absolute",
        right: 40,
        top: 50,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});
