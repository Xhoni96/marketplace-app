import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

export const AppButton = ({ title, onPress, color, disabled }) => (
    <TouchableOpacity
        disabled={disabled}
        style={[styles.container, color && { backgroundColor: colors[color] }, disabled && styles.disabled]}
        onPress={onPress}
    >
        <Text style={[styles.text, disabled && styles.disabled]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    disabled: {
        backgroundColor: colors.lightGrey,
        color: colors.black,
    },
});
